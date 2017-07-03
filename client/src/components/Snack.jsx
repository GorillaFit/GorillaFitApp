import React from 'react';

const Snack = (props) => (
  <div>
    <h6>Snack:</h6>
    {props.snack.map((item, i) => <li type='square' key={i}>{item}</li>)}
  </div>
);

export default Snack;