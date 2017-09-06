import React from 'react';

const Photo = ({ index, url }) => (
  <div>
    <img
      src={ url }
      width={ 500 }
      height='auto'
    />
  </div>
);

export default Photo;
