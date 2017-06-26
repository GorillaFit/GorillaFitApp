import React from 'react';
import ListItem from './ListItem.jsx';

const Items = (props) => (
  <div>
    <h4>What You've Eaten Today: </h4>
    {props.selectedFoodItems.length === 0 ? 'You have not logged any food for the day!' : props.selectedFoodItems.map(item => <ListItem item={item}/>)}
  </div>
)

export default Items;

//this will reference list item for sure



//{this.props.selectedFoodItems.map(item => <ListItem item={item}/>)}