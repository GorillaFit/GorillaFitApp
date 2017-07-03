import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import axios from 'axios';
import './MatchingItem.css';
//var Columns = require('react-columns');

class MatchingItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listClear: false,
      foodName: null,
      clicked: false
    }
    this.addFood = this.addFood.bind(this)
  }

  postFood(foodItem){
    console.log('this is a food item ', foodItem)
    if(this.props.username){
      axios.post('/foods', {
        food: foodItem.data,
        username: this.props.username,
        date: Date.now(),
        meal: this.props.meal
      })
      .catch((err)=>{
        console.log('this is an err ', err);
      })
    }
  }

  onlySetsState (e) {
    e.preventDefault();
    this.setState({
      foodName: this.props.item.food_name || this.props.item.brand_name_item_name 
    }).then(this.addFood())
  }

  addFood (event) {
    event.preventDefault();
    axios.get('/foods', {
      params: {
        addedFood: this.props.item.food_name || this.props.item.brand_name_item_name      }
    })
    .then((res) => {
      this.props.addFood(this.props.iterator, this.props.meal,this.props.item.food_name || this.props.item.brand_name_item_name  , res.data[0].nf_calories,res.data[0].nf_total_fat, res.data[0].nf_total_carbohydrate,res.data[0].nf_protein, res)
      this.postFood(res);
    })
    .then(() => {
      this.setState({listClear: true, clicked:true })
      
    })
    .then( res => {
      //this.props.splicer(this.props.iterator)
    })
    .catch((err) => {
      console.log(err)
      console.log('here in error')
    })

  }

  clearList(event) {
    this.props.clearResults();
  }


  render()  {
  	return (
	  	<div>
      
      <form className='MatchingItem'>
     <br/>
	    {!this.state.clicked && <Button onClick={this.addFood.bind(this)}> {!this.state.listClear && (this.props.item.food_name || (this.props.item.brand_name_item_name + '(' + this.props.item.nf_calories.toString() + ')'))} </Button>}
	    
      </form>
      <br/>
	  </div>
    )
  }
  
}
  


export default MatchingItem;


