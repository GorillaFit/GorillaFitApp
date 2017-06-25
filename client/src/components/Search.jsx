import React from 'react';
import MatchingItem from './MatchingItem.jsx';

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
  render() {
    return (
      <div>
        <form>
          Input Your Food:
          <input type="text" name="food_item" />
          <input type="submit" value="Submit" />
        </form>
          {this.state.matchingFoodItems.map(item => <MatchingItem item={item}/>)}
      </div>
    )
  }
}

export default Search;