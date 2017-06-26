import React from 'react';

const Lunch = (props) => (
  <div>
    <h6>Lunch:</h6>
    {props.lunch.map((item, i) => <li type='square' key={i}>{item}</li>)}
  </div>
);

export default Lunch;