import React from 'react';
import { min, max, scaleLinear, scaleOrdinal } from 'd3';

const Scale = () => {
  let dataset = [1.2, 2.3, 0.9, 1.5, 3.3];
  let linear = scaleLinear()
    .domain([min(dataset), max(dataset)])
    .range([0, 300]);
  console.log(linear(0.9));
  console.log(linear(2.3));
  console.log(linear(3.3));

  let idxs = [0, 1, 2, 3, 4];
  let colors = ['red', 'blue', 'green', 'yellow', 'black'];
  let ordinal = scaleOrdinal()
    .domain(idxs)
    .range(colors);
  console.log(ordinal(0));
  console.log(ordinal(2));
  console.log(ordinal(4));

  return (
    <div style = {{
      display       : 'inline-block',
      verticalAlign : 'top',
      margin        : 10,
      padding       : 15,
      boxShadow     : 'inset 0 0 1em gray'
    }}>
      <h1> Scale </h1>
      <strong> Output in console </strong>
    </div>
  );
};

export default Scale;
