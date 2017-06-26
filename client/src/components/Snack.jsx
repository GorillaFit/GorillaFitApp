import React from 'react';

const Snack = (props) => (
  <div>
   <h6>Snack:</h6>
    {props.snack.map(item => <li type='square'>{item}</li>)}
  </div>
)

export default Snack;