import React from 'react';

const Calories = (props) => (
  <div>
    <h3> Total Calories </h3>
    <p>{Math.floor(props.totalCalories)}</p>
  </div>
)


export default Calories;