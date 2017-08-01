import React, { Component } from 'react';
import { select } from 'd3';

import D3Container from './d3-container';

const initList = () => {
  const width = 200;
  const height = 200;

  const svg = select('#song-list')
    .attr('width', width)
    .attr('height', height);

  const songNames = ['name1', 'name2', 'name3', 'name4', 'name5'];
  svg.selectAll('text')
    .data(songNames)
    .enter()
    .append('text')
    .text(d => d)
    .attr('x', 30)
    .attr('y', (d, i) => (i + 1) * 20 + 180)
    .attr('opacity', 0)
    .attr('font-size', 16)
    .transition()
    .duration(1200)
    .delay((d, i) => i * 120)
    .attr('y', (d, i) => i ? (i * 25 + 40) : 30)
    .attr('opacity', (d, i) => i ? 0.4 : 0.7)
    .attr('font-size', (d, i) => i ? 16 : 36);
};

const animate = steps => {
  const change = (steps % 5 + 5) % 5;

  select('#song-list').selectAll('text')
    .transition()
    .duration(500)
    .attr('y', (d, i) => (i + change) % 5 ? ((i + change) % 5 * 25 + 40) : 30)
    .attr('opacity', (d, i) => (i + change) % 5 ? 0.4 : 0.7)
    .attr('font-size', (d, i) => (i + change) % 5 ? 16 : 36);
};

class SongList extends Component {
  state = {
    steps : 0
  }

  componentDidMount () {
    initList();
  }

  componentDidUpdate () {
    const { steps } = this.state;
    animate(steps);
  }

  _change = () => {
    const { steps } = this.state;
    this.setState({
      steps : steps - 1
    });
  }

  render () {
    return (
      <D3Container>
        <h1> SongList </h1>

        <svg id = 'song-list' />
        <button onClick = {this._change}> Switch </button>
      </D3Container>
    );
  }
}

export default SongList;
