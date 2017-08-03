import React, { Component } from 'react';
import { Style } from 'radium';
import { select, max, scaleLinear, axisBottom, easeBounce } from 'd3';

import D3Container from './d3-container';

const testD3 = () => {
  let width = 300;
  let height = 300;

  let svg = select('#chart-animation')
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
    .attr('width', 0)
    .attr('height', rectHeight - 2)
    .style('fill', 'red')
    .transition()
    .duration(1500)
    .delay((d, i) => i * 200 + 1500)
    .style('fill', 'steelblue')
    .ease(easeBounce)
    .attr('width', linear);

  svg.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(20,${dataset.length * rectHeight})`)
    .call(axis.ticks(7));

  const circle1 = svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 50)
    .attr('r', 45)
    .style('fill', 'green');
  circle1.transition()
    .duration(1000)
    .delay(1500)
    .attr('cx', 300);

  const circle2 = svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 150)
    .attr('r', 45)
    .style('fill', 'green');
  circle2.transition()
    .duration(1500)
    .delay(1500)
    .attr('cx', 300)
    .style('fill', 'red');

  const circle3 = svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 250)
    .attr('r', 45)
    .style('fill', 'green');
  circle3.transition()
    .duration(2000)
    .delay(1500)
    .ease(easeBounce)
    .attr('cx', 300)
    .style('color', 'red')
    .attr('r', 25);
};

class ChartAnimation extends Component {
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
        <h1> ChartAnimation </h1>

        <svg id = 'chart-animation' />
      </D3Container>
    );
  }
};

export default ChartAnimation;
