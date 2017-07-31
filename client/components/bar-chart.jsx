import React, { Component } from 'react';
import { Style } from 'radium';
import { select, max, scaleLinear, axisBottom } from 'd3';

import D3Container from './d3-container';

const testD3 = () => {
  let width = 300;
  let height = 300;

  let svg = select('#bar-chart')
    .attr('width', width)
    .attr('height', height);

  let rectHeight = 25;

  let dataset = [2.5, 2.1, 1.7, 1.3, 0.9];
  let linear = scaleLinear()
    .domain([0, max(dataset)])
    .range([0, 250]);
  let axis = axisBottom(linear);

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', 20)
    .attr('y', (d, i) => i * rectHeight)
    .attr('width', d => linear(d))
    .attr('height', rectHeight - 2)
    .attr('fill', 'steelblue');

  svg.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(20,${dataset.length * rectHeight})`)
    .call(axis.ticks(7));
};

class BarChart extends Component {
  componentDidMount () {
    testD3();
  }

  render () {
    return (
      <D3Container>
        <Style
          rules = {{
            '.axis path, .axis line' : {
              fill           : 'none',
              stroke         : 'black',
              shapeRendering : 'crispEdges'
            },

            '.axis text' : {
              fontFamily : 'sans-serif',
              fontSize   : '15px'
            }
          }}
        />
        <h1> BarChart </h1>

        <svg id = 'bar-chart' />
      </D3Container>
    );
  }
};

export default BarChart;
