import React from 'react';
import ExerciseEntry from './ExerciseEntry.jsx';

const Exercises = (props) => (
  <div>
    <h4>Exercises You've Done Today: </h4>
    {props.exercises.map((exercise, index) => {
      return <ExerciseEntry key={index} exercise={exercise} />;
    })}
  </div>
);

export default Exercises;