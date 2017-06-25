import React from 'react';
import MatchingItem from './MatchingItem.jsx';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFoodItemInput: null,

      //matchingFoodItems represents the matches that our
      //API serves up in response to being given userFoodItemInput
      matchingFoodItems: []
      //to see how it works, add a few string elements to matching food items.
      //Such as 'apple - 100 calories', 'cheese - 230 calories'
    }
  }

  handleChange(e){
    console.log('handle change is firing')
    this.setState({userFoodItemInput: e.target.value})
  }

  handleClick(e){
    e.preventDefault();
    axios.get('/food', {
      params: {
        userFood: this.state.userFoodItemInput
      }
    })
    .then((res) => {
      //do something with the data 
    })
    .catch((err) => {
      //do something with the error
    })
  }

  render() {
    return (
      <div>
        <form>
          Input Your Food:
         
          <input type="submit" value="Submit" onClick={this.handleClick.bind(this)}/>
        </form>
          {this.state.matchingFoodItems.map(item => <MatchingItem item={item}/>)}
      </div>
    )
  }
}

// <input id="input" type="text" name="food_item" onChange={this.handleChange.bind(this)}/>

export default Search;