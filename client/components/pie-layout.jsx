import React, { Component } from 'react';
import { select, pie, arc as d3Arc, scaleOrdinal, schemeCategory10 } from 'd3';

import D3Container from './d3-container';

const testD3 = () => {
  const dataset = [30, 10, 43, 55, 13];
  const piedata = pie()(dataset);

  const width = 400;
  const height = 400;
  const svg = select('#pie-layout')
    .attr('width', width)
    .attr('height', height);
  const color = scaleOrdinal(schemeCategory10);

  const outerRadius = 150;
  const innerRadius = 0;
  const arc = d3Arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius);

  const arcs = svg.selectAll('g')
    .data(piedata)
    .enter()
    .append('g')
    .attr('transform', 'translate(' + (width / 2) + ',' + (width / 2) + ')');

  arcs.append('path')
    .style('fill', (d, i) => color(i))
    .attr('d', arc);

  arcs.append('text')
    .attr('transform', d => `translate(${arc.centroid(d)})`)
    .attr('text-anchor', 'middle')
    .text(d => d.data);
};

class PieLayout extends Component {
  componentDidMount () {
    testD3();
  }

  render () {
    return (
      <D3Container>
        <h1> PieLayout </h1>

        <svg id = 'pie-layout' />
      </D3Container>
    );
  }
}

export default PieLayout;
