import React from 'react';

const Dinner = (props) => (
  <div>
    <h6>Dinner:</h6>
    {props.dinner.map(item => <li type='square'>{item}</li>)}
  </div>
)

export default Dinner;