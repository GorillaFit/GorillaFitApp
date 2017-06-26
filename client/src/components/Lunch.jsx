import React from 'react';

const Lunch = (props) => (
  <div>
   <h6>Lunch:</h6>
    {props.lunch.map(item => <li type='square'>{item}</li>)}
  </div>
)

export default Lunch;