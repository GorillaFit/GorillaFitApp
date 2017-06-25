import React from 'react';
import Matches from './Matches.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFoodItemInput: null,

      //matchingFoodItems represents the matches that our
      //API serves up in response to being given userFoodItemInput
      matchingFoodItems: []
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
        <Matches />
      </div>
    )
  }
}

export default Search;