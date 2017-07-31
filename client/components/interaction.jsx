import React, { Component } from 'react';
import { select, max, scaleBand, range, axisBottom, scaleLinear, axisLeft } from 'd3';

import D3Container from './d3-container';

const testD3 = () => {
  const width = 400;
  const height = 400;

  const svg = select('#interaction')
    .attr('width', width)
    .attr('height', height);
  const circle = svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 100)
    .attr('r', 40);
  circle.on('click', () => alert('click circle'));

  const padding = { left: 30, right: 30, top: 20, bottom: 20 };

  const dataset = [10, 20, 30, 40, 33, 24, 12, 5];

  const xScale = scaleBand()
    .domain(range(dataset.length))
    .range([0, width - padding.left - padding.right]);
  const xAxis = axisBottom(xScale);

  const yScale = scaleLinear()
    .domain([0, max(dataset)])
    .range([height - padding.top - padding.bottom, 0]);
  const yAxis = axisLeft(yScale);

  const rectPadding = 4;
  svg.selectAll('.FullRect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'FullRect')
    .attr('x', (d, i) => padding.left + xScale(i) + rectPadding / 2)
    .attr('y', d => padding.top + yScale(d))
    .attr('width', xScale.bandwidth() - rectPadding)
    .attr('height', d => height - padding.top - padding.bottom - yScale(d))
    .style('fill', 'steelblue')
    .on('mouseover', function (d, i) {
      select(this).style('fill', 'yellow');
    })
    .on('mouseout', function (d, i) {
      select(this)
        .transition()
        .duration(500)
        .style('fill', 'steelblue');
    });

  svg.append('g')
    .attr('transform', `translate(${padding.left},${padding.bottom + height - 40})`)
    .call(xAxis);

  svg.append('g')
    .attr('transform', `translate(${padding.left},${padding.top})`)
    .call(yAxis);
};

class Interaction extends Component {
  componentDidMount () {
    testD3();
  }

  render () {
    return (
      <D3Container>
        <h1> Interaction </h1>

        <svg id = 'interaction' />
      </D3Container>
    );
  }
}

export default Interaction;
