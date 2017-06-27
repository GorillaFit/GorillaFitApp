import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import Items from './components/Items.jsx';
import Calories from './components/Calories.jsx';
import Nutrients from './components/Nutrients.jsx';
import SignUp from './components/SignUp.jsx';
import update from 'immutability-helper';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: []
      },
      //the below represents the food items that the user has selected
      //to see it in action, paste in 'pizza - 450 calories', 'ice cream - 800 calories'
      selectedFoodItems: [],

      //total calories represents the sum of all calories in selected food items
      //to see in action, set it to a random number
      totalCalories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    };
    this.addFood = this.addFood.bind(this);
  }

  addFood(meal, foodToAdd, caloriesToAdd, fatToAdd, carbsToAdd, proteinToAdd) {
    var tempItems = this.state.items;
    for (var key in tempItems) {
      if (key === meal) {
        tempItems[key].push(foodToAdd);
      }
    }
    var newTotalCalories = this.state.totalCalories + caloriesToAdd;
    var newFat = this.state.fat + Math.floor(fatToAdd);
    var newCarbs = this.state.carbs + Math.floor(carbsToAdd);
    var newProtein = this.state.protein + Math.floor(proteinToAdd);
    this.setState({
      items: tempItems,
      totalCalories: newTotalCalories,
      fat: newFat,
      carbs: newCarbs,
      protein: newProtein
    });
    console.log(this.state.items);
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     method: 'GET',
  //     success: (data) => {
  //       //console.log(data.foods)
  //       this.setState({
  //         items: data.foods
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render() {
    return (<div>
      <SignUp />
      <Search addFood={this.addFood} />
      <Items breakfast={this.state.items.breakfast} lunch={this.state.items.lunch} dinner={this.state.items.dinner} snack={this.state.items.snack} />
      <Calories totalCalories={this.state.totalCalories} />
      <Nutrients fat={this.state.fat} carbs={this.state.carbs} protein={this.state.protein} />
    </div >);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

