import React from 'react';
import MatchingItem from './MatchingItem.jsx';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFoodItemInput: '',
      matchingFoodItems: [],
      meal: 'snack'
    };
    this.clearFoods = this.clearFoods.bind(this);
  }

  handleChange(e) {
    console.log('handle change is firing');
    this.setState({ userFoodItemInput: e.target.value });
    //console.log(this.state.userFoodItemInput)
  }

  clearFoods() {
    this.setState({ userFoodItemInput: [] });
  }

  dropdownChange(e) {
    console.log('this is the val', e.target.value);
    this.setState({ meal: e.target.value });
  }

  handleClick(e) {
    //console.log(this.state.userFoodItemInput)
    e.preventDefault();
    axios.get('/foods', {
      params: {
        userFood: this.state.userFoodItemInput
      }
    })
    .then((res) => {
      var tempMatchingFoods = this.state.matchingFoodItems.slice();
      tempMatchingFoods.push(res.data);
      this.setState({ matchingFoodItems: tempMatchingFoods });
      console.log(this.state.matchingFoodItems[0][0]);
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
        <form>
          Input Your Food:
          <input id="input" type="text" name="food_item" value={this.state.userFoodItemInput} onChange={this.handleChange.bind(this)} />
          <input id="submit" type="submit" value="Submit" onClick={this.handleClick.bind(this)} />
          <br />
          <select onChange={this.dropdownChange.bind(this)}>
            <option value='snack'>Snack</option>
            <option value='breakfast'>Breakfast</option>
            <option value='lunch'>Lunch</option>
            <option value='dinner'>Dinner</option>
          </select>
        </form>
        {this.state.matchingFoodItems.map((item, i) => <MatchingItem meal={this.state.meal} addFood={this.props.addFood} clearMatchList={this.clearFoods} item={item} key={i} />)}
        <br />
      </div>

    );
  }
}


export default Search;
