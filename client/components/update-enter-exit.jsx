import React, { Component } from 'react';
import { select } from 'd3';

import D3Container from './d3-container';

const testD3 = () => {
  const div = select('#update-enter-exit');
  let p = div.selectAll('p');

  const dataset1 = [3, 6, 9, 12, 15];
  const update1 = p.data(dataset1);
  update1.text(d => `update ${d}`);
  const enter = update1.enter();
  enter.append('p').text(d => `enter ${d}`);

  p = div.selectAll('p');
  const dataset2 = [4];
  const update2 = p.data(dataset2);
  update2.text(d => `update ${d}`);
  const exit = update2.exit();
  exit.text(d => `exit ${d}`);

  // exit.remove();
};

class UpdateEnterExit extends Component {
  componentDidMount () {
    testD3();
  }

  render () {
    return (
      <D3Container>
        <h1> UpdateEnterExit </h1>

        <div id = 'update-enter-exit'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </D3Container>
    );
  }
}

export default UpdateEnterExit;
