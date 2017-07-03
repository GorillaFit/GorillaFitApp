import React from 'react';
import ListItem from './ListItem.jsx';

import Snack from './Snack.jsx';
import Lunch from './Lunch.jsx';
import Breakfast from './Breakfast.jsx';
import Dinner from './Dinner.jsx';

const Items = (props) => (
  <div>
    <h2>What You've Eaten Today: </h2>
    {props.breakfast.length !== 0 && <Breakfast breakfast={props.breakfast} />}
    {props.lunch.length !== 0 && <Lunch lunch={props.lunch} />}
    {props.dinner.length !== 0 && <Dinner dinner={props.dinner} />}
    {props.snack.length !== 0 && <Snack snack={props.snack} />}
    {(props.breakfast.length === 0 && props.lunch.length === 0 &&
      props.dinner.length === 0 && props.snack.length === 0) ? 'You have not logged any food for the day!' : <div></div>}
  </div>
);

export default Items;
