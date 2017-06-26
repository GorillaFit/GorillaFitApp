import React from 'react';
import ListItem from './ListItem.jsx';

const Items = (props) => (
  <div>
    <h4>ITEMS</h4>
    {props.selectedFoodItems.map(item => <ListItem item={item}/>)}
  </div>
)

export default Items;

//this will reference list item for sure



//{this.props.selectedFoodItems.map(item => <ListItem item={item}/>)}