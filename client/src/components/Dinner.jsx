import React from 'react';

const Dinner = (props) => (
  <div>
    <h6>Dinner:</h6>
    {props.dinner.map((item, i) => <li type='square' key={i}>{item}</li>)}
  </div>
);

export default Dinner;