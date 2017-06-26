import React from 'react';
import MatchingItem from './MatchingItem.jsx';
import axios from 'axios';
        
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFoodItemInput: '',

      //matchingFoodItems represents the matches that our
      //API serves up in response to being given userFoodItemInput
      matchingFoodItems: []
      //to see how it works, add a few string elements to matching food items.
      //Such as 'apple - 100 calories', 'cheese - 230 calories'
    }
    this.clearFoods = this.clearFoods.bind(this);
  }

  handleChange(e){
    console.log('handle change is firing')
    this.setState({userFoodItemInput: e.target.value})
    //console.log(this.state.userFoodItemInput)
  }

  clearFoods () {
     this.setState({userFoodItemInput: []})
  }

  handleClick(e){
    //console.log(this.state.userFoodItemInput)
    e.preventDefault();
    axios.get('/foods', {
      params: {
        userFood: this.state.userFoodItemInput
      }
    })
    .then((res) => {
      var tempMatchingFoods = this.state.matchingFoodItems.slice();
      tempMatchingFoods.push(res.data)
      this.setState({matchingFoodItems: tempMatchingFoods})
      console.log(this.state.matchingFoodItems[0][0])
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  render() {
    return (
      <div>
        <form>
          Input Your Food:
          <input id="input" type="text" name="food_item" value={this.state.userFoodItemInput} onChange={this.handleChange.bind(this)}/>
          <input id="submit" type="submit" value="Submit" onClick={this.handleClick.bind(this)}/>
          <br/>
          <select>
            <option >Snack</option>
            <option >Breakfast</option>
            <option >Lunch</option>
            <option >Dinner</option>
          </select>
        </form>
           {this.state.matchingFoodItems.map(item => <MatchingItem addFood={this.props.addFood} clearMatchList= {this.clearFoods} item={item}/>)} 
          <br/>
      </div>

    )
  }
}
export default Search;


// this.state.matchingFoodItems