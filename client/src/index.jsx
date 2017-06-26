import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import Items from './components/Items.jsx';
import Calories from './components/Calories.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //the below represents the food items that the user has selected
      //to see it in action, paste in 'pizza - 450 calories', 'ice cream - 800 calories'
      selectedFoodItems: [],

      //total calories represents the sum of all calories in selected food items
      //to see in action, set it to a random number
      totalCalories: null
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      method: 'GET',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    return (<div>
      <Search />
      <Items selectedFoodItems={this.state.selectedFoodItems}/>
      <Calories totalCalories = {this.state.totalCalories}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


//this index will have 3 components 
//search 
//items
//calories