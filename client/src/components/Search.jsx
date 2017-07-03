import React from 'react';
import MatchingItem from './MatchingItem.jsx';
import axios from 'axios';
import Button from 'react-bootstrap/lib/Button';
import './Search.css'
var Columns = require('react-columns');


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFoodItemInput: '',

      //matchingFoodItems represents the matches that our
      //API serves up in response to being given userFoodItemInput
      matchingFoodItems: [],
      //to see how it works, add a few string elements to matching food items.
      //Such as 'apple - 100 calories', 'cheese - 230 calories'

      meal: 'snack'
    },
    this.clearFoods = this.clearFoods.bind(this);
    this.spliceFood = this.spliceFood.bind(this);
    this.clearResults = this.clearResults.bind(this)
  }

  handleChange(e){
    //console.log('handle change is firing')
    this.setState({userFoodItemInput: e.target.value})
    //console.log(this.state.userFoodItemInput)
  }

  clearFoods () {
     this.setState({userFoodItemInput: []})
  }

  spliceFood (index) {
  // var currFoods = this.state.matchingFoodItems.splice(index)
  // this.setState({
  //   matchingFoodItems: currFoods
  // })
  }
  dropdownChange (e) {
    //console.log('this is the val', e.target.value)
    this.setState({meal:e.target.value})
  }

  handleClick(e){
    e.preventDefault();
    this.setState({
      userFoodItemInput: ''
    })
    
    axios.get('/test', {
      matchingFoodItems: [],
      meal: 'snack'
    })

    this.clearFoods = this.clearFoods.bind(this);
  }

  handleChange(e) {
    console.log('handle change is firing');
    this.setState({ userFoodItemInput: e.target.value });
  }

  clearFoods() {
    this.setState({ userFoodItemInput: '' });
  }

  clearResults(){
    this.setState({ matchingFoodItems: [] })
  }

  dropdownChange(e) {
    console.log('this is the val', e.target.value);
    this.setState({ meal: e.target.value });
  }


  postFood(foodObject){
    console.log('post food is being called! ')
    if(this.props.username){
      axios.post('/foods', {
        food: foodObject,
        username: this.props.username,
        date: Date.now()
      })
    }
  }

  handleClick(e) {  
    e.preventDefault();
    axios.get('/test', {
      params: {
        userFood: this.state.userFoodItemInput
      }
    })
    .then((res) => {
      var tempMatchingFoods = this.state.matchingFoodItems.slice();
      console.log('here is res data', res.data)
      tempMatchingFoods.push(res.data);
      this.setState({ matchingFoodItems: res.data });
    })
    .then(() => {
      this.setState({
        userFoodItemInput: ''
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }



  render() {
    return (
      <div>
      <h1>What did you eat today?</h1>
        <form>

          <input placeholder='Search for a food...'className ='box' id="input" type="text" name="food_item" value={this.state.userFoodItemInput} onChange={this.handleChange.bind(this)} />

          <input id="submit" type="submit" value="Submit" onClick={this.handleClick.bind(this)} />
          <br />

          <select className ='dropdown' onChange={this.dropdownChange.bind(this)}>
            <option value='snack'>Snack</option>
            <option value='breakfast'>Breakfast</option>
            <option value='lunch'>Lunch</option>
            <option value='dinner'>Dinner</option>
          </select>
        </form>
       
        <Columns query='min-width: 50px'>{this.state.matchingFoodItems.map((item, i) => <MatchingItem username={this.props.username} clearResults={this.clearResults} meal={this.state.meal} addFood={this.props.addFood} clearMatchList={this.clearFoods} item={item} key={i} state={this.state} />)}</Columns>


        <br />
         {this.state.matchingFoodItems.length !==0 && <Button bsStyle='danger' id='but' bsSize='xsmall' onClick={this.clearResults} >Clear Results</Button>}
      </div>

    );
  }
}


export default Search;


