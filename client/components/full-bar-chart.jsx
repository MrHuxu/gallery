import React, { Component } from 'react';
import { select, range, max, scaleLinear, scaleBand, axisLeft, axisBottom } from 'd3';

const testD3 = () => {
  const width = 400;
  const height = 400;

  const svg = select('#full-bar-chart')
    .attr('width', width)
    .attr('height', height);
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
    .attr('fill', 'steelblue');

  svg.selectAll('.FullText')
    .data(dataset)
    .enter()
    .append('text')
    .attr('class', 'FullText')
    .attr('transform', `translate(${padding.left}, ${padding.top})`)
    .attr('x', (d, i) => xScale(i) + rectPadding / 2)
    .attr('y', yScale)
    .attr('dx', () => (xScale.bandwidth() - rectPadding) / 2 - 8)
    .attr('dy', () => 20)
    .text(d => d);

  svg.append('g')
    .attr('transform', `translate(${padding.left},${padding.bottom + height - 40})`)
    .call(xAxis);

  svg.append('g')
    .attr('transform', `translate(${padding.left},${padding.top})`)
    .call(yAxis);
};

class FullBarChart extends Component {
  componentDidMount () {
    testD3();
  }

  render () {
    return (
      <div style = {{
        display       : 'inline-block',
        verticalAlign : 'top',
        margin        : 10,
        padding       : 15,
        boxShadow     : 'inset 0 0 1em gray'
      }}>
        <h1> FullBarChart </h1>

        <svg id = 'full-bar-chart' />
      </div>
    );
  }
}

export default FullBarChart;
