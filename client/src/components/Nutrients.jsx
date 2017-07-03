import React from 'react';

const Nutrients = (props) => (
  <div>
    <h3> Nutrient Breakdown </h3>

    <p>{'Fats: ' + props.fat + ' grams'}</p>
    <p>{'Carbohydrates: ' + props.carbs + ' grams'}</p>
    <p>{'Protein: ' + props.protein + ' grams'} </p>

  </div>
);

export default Nutrients;