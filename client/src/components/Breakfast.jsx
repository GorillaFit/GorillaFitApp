import React from 'react';

const Breakfast = (props) => (
  <div>
    <h6>Breakfast:</h6>
    {props.breakfast.map(item => <li type='square'>{item}</li>)}
  </div>
)

export default Breakfast;