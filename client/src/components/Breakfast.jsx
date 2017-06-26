import React from 'react';

const Breakfast = (props) => (
  <div>
    <h6>Breakfast:</h6>
    {props.breakfast.map((item, i) => <li type='square' key={i}>{item}</li>)}
  </div>
);

export default Breakfast;