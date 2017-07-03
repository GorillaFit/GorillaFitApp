import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import Items from './components/Items.jsx';
import Calories from './components/Calories.jsx';
import Nutrients from './components/Nutrients.jsx';
import './index.css'
var Columns = require('react-columns');

import SignUp from './components/SignUp.jsx';
import update from 'immutability-helper';
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
      selectedFoodItems: [],
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


  addFood(i, meal, foodToAdd, caloriesToAdd, fatToAdd, carbsToAdd, proteinToAdd) {
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
    console.log(this.state.items)
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
    axios.get('/userfood', {
      params: {
        username: this.state.username,
        date: this.state.date
      }
    })
    .then((res) => {
      this.bucketFoodHistoryByMeal(res);
    })
    .catch((err) => {
      console.log(err);
    });

  }

  bucketFoodHistoryByMeal(res){
    console.log('this is res data in bucket', res)
    const items = {
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: []
      }
    res.data.forEach((el)=>{  
      let mealtime = el.meal_time;
      items[mealtime].push(el.food_name);
    })
    this.setState({items: items})
  }

  onBack(e){ 
    e.preventDefault();
    let oneDayBack = new Date().setDate(new Date(this.state.date).getDate()-1);
    this.setState({date: oneDayBack}, ()=>{
      axios.get('/userfood', {
        params: {
          username: this.state.username,
          date: oneDayBack
        }
      })
      .then((res) => {
        this.bucketFoodHistoryByMeal(res)
      })
      .catch((err) => {
        console.log(err);
      });
    })
  }

  onForward(e){
    console.log('this date ', this.state.date)
    e.preventDefault();
    let oneDayForward = new Date().setDate(new Date(this.state.date).getDate()+1);
    this.setState({date: oneDayForward}, ()=>{
      axios.get('/userfood', {
        params: {
          username: this.state.username,
          date: oneDayForward
        }
      })
      .then((res) => {
        this.bucketFoodHistoryByMeal(res)
      })
      .catch((err) => {
        console.log(err);
      });
    })  
  }

  render() {
    return (
    
      <div>
        {this.state.username ? <ForwardButton onForward={this.onForward.bind(this)}/> : ''}
        {this.state.username ? <BackButton onBack={this.onBack.bind(this)}/> : ''}
        {this.state.username ? '' : <SignUp setUsername={this.setUsername.bind(this)}/>}
          <Search  addFood={this.addFood} username={this.state.username}/>
          
    
          <div id = 'left'>
            <Items breakfast={this.state.items.breakfast} lunch={this.state.items.lunch} dinner={this.state.items.dinner} snack={this.state.items.snack} />

          </div>
          <div id = 'right'>
            <Calories  totalCalories={this.state.totalCalories} /><br/>
            <Nutrients  fat={this.state.fat} carbs={this.state.carbs} protein={this.state.protein} />
          </div>
      </div>
    

   );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));