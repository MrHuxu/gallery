import React from 'react';

const D3Container = ({ children }) => (
  <div style = {{
    display       : 'inline-block',
    verticalAlign : 'top',
    margin        : 10,
    padding       : 15,
    boxShadow     : 'inset 0 0 1em gray'
  }}>
    { children }
  </div>
);

export default D3Container;
