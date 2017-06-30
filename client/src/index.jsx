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
/*Exercise Components*/
import SearchExercise from './components/SearchExercise.jsx';
import Exercises from './components/Exercises.jsx';
import CalorieOutput from './components/CalorieOutput.jsx';
import BackButton from './components/backButton.jsx';
import ForwardButton from './components/forwardButton.jsx';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date.now(),
      username: null,
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
      protein: 0,
      /*Below are dummy data for exercises and calorie output*/
      exercises: [
        'rowing',
        'fencing'
      ],
      calorieOutput: 560


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

  addExercise(result) {
    var tempArray = this.state.exercises.slice();
    tempArray.push(result.exercises[0].name);

    this.setState({
      exercises: tempArray,
      calorieOutput: this.state.calorieOutput + result.exercises[0].nf_calories
    });
  }

  setUsername(username){
    this.setState({'username': username});
  }

  onBack(e){ 
    e.preventDefault();
    let oneDayBack = new Date(new Date().setDate(new Date(this.state.date).getDate()-1));
    this.setState({date: oneDayBack})
    axios.get('/userfoods', {
      params: {
        username: this.username,
        date: this.date
      }
    })
    .then((res) => {
      //do something with the data
    })
    .catch((err) => {
      console.log(err);
    });
  }

  onForward(e){
    e.preventDefault();
    let oneDayBack = new Date(new Date().setDate(new Date(this.state.date).getDate()+1));
    this.setState({date: oneDayBack})
    axios.get('/userfoods', {
      params: {
        username: this.username,
        date: this.date
      }
    })
    .then((res) => {
      //do something with the data
    })
    .catch((err) => {
      console.log(err);
    });

  }


  render() {
    return (
    <div>
      <ForwardButton onForward={this.onForward.bind(this)}/>
      <BackButton onBack={this.onBack.bind(this)}/>
      <SignUp setUsername={this.setUsername.bind(this)}/>
      <Search addFood={this.addFood} username={this.state.username}/>
      <Items breakfast={this.state.items.breakfast} lunch={this.state.items.lunch} dinner={this.state.items.dinner} snack={this.state.items.snack} />
      <Calories totalCalories={this.state.totalCalories} />
      <Nutrients fat={this.state.fat} carbs={this.state.carbs} protein={this.state.protein} />
      <hr/>
      <SearchExercise addExercise={this.addExercise.bind(this)}/>
      <Exercises exercises={this.state.exercises}/>
      <CalorieOutput calorieOutput={this.state.calorieOutput}/>
    </div >);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

