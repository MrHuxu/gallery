import React from 'react';
import { min, max, scaleLinear, scaleOrdinal } from 'd3';

import D3Container from './d3-container';

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
    <D3Container>
      <h1> Scale </h1>
      <strong> Output in console </strong>
    </D3Container>
  );
};

export default Scale;
