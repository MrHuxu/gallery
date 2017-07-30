import React, { Component } from 'react';
import { select } from 'd3';

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
      <div style = {{
        display       : 'inline-block',
        verticalAlign : 'top',
        margin        : 10,
        padding       : 15,
        boxShadow     : 'inset 0 0 1em gray'
      }}>
        <h1> DataBind </h1>

        <div id = 'data-bind'>
          <p> Apple </p>
          <p> Pear </p>
          <p> Banana </p>
        </div>
      </div>
    );
  }
}

export default DataBind;
