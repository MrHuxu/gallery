import React, { Component } from 'react';
import { select } from 'd3';

import D3Container from './d3-container';
import { listContainer } from '../styles/song-list';

const songList = [
  { id: 2009803, name: 'Be Somebody' },
  { id: 28713832, name: '기억이 머물던 곳' },
  { id: 27571802, name: '我的钢琴很简单' },
  { id: 496549, name: 'Chiru' },
  { id: 22822602, name: '風の詩' }
];

const initList = () => {
  const width = 300;
  const height = 200;

  const svg = select('#song-list')
    .attr('width', width)
    .attr('height', height);

  svg.selectAll('text')
    .data(songList)
    .enter()
    .append('text')
    .text(d => d.name)
    .attr('x', 30)
    .attr('y', (d, i) => (i + 1) * 20 + 180)
    .attr('opacity', 0)
    .attr('font-size', 16)
    .transition()
    .duration(1200)
    .delay((d, i) => i * 120)
    .attr('y', (d, i) => i ? (i * 30 + 40) : 30)
    .attr('opacity', (d, i) => i ? 0.4 : 0.7)
    .attr('font-size', (d, i) => i ? 16 : 36);
};

const animate = steps => {
  const change = (5 - steps % 5) % 5;

  select('#song-list').selectAll('text')
    .transition()
    .duration(500)
    .attr('y', (d, i) => (i + change) % 5 ? ((i + change) % 5 * 30 + 40) : 30)
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

  _change = () => {
    const { steps } = this.state;
    animate(steps + 1);
    setTimeout(() => {
      this.setState({
        steps : steps + 1
      });
    }, 550);
  }

  render () {
    const { steps } = this.state;

    return (
      <D3Container>
        <h1> SongList </h1>

        <div style = {listContainer}>
          <iframe
            frameBorder = 'no'
            border = '0'
            marginWidth = '0'
            marginHeight = '0'
            width = '298'
            height = '52'
            src = {`//music.163.com/outchain/player?type=2&id=${songList[steps % 5].id}&auto=1&height=32`}
          />
        </div>

        <div>
          <svg id = 'song-list' />
          <button onClick = {this._change}> Switch </button>
        </div>
      </D3Container>
    );
  }
}

export default SongList;
