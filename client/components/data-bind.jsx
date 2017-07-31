import React, { Component } from 'react';
import { select } from 'd3';

import D3Container from './d3-container';

const testD3 = () => {
  let div = select('#data-bind')
    .attr('width', 300)
    .attr('height', 300);
  let p = div.selectAll('p');
  let dataset = ['I like apple', 'I like pear', 'I like banana'];

  p.data(dataset);
  p.text(d => d);
};

class DataBind extends Component {
  componentDidMount () {
    testD3();
  }

  render () {
    return (
      <D3Container>
        <h1> DataBind </h1>

        <div id = 'data-bind'>
          <p> Apple </p>
          <p> Pear </p>
          <p> Banana </p>
        </div>
      </D3Container>
    );
  }
}

export default DataBind;
