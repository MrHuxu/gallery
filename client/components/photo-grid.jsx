import React from 'react';

import Photo from './photo';

const PhotoGrid = () => (
  <div>
    {
      [1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <Photo
          index={ i }
          url={ `https://raw.githubusercontent.com/MrHuxu/img-repo/master/gallery/WechatIMG${i}.jpeg` }
        />
      ))
    }
  </div>
);

export default PhotoGrid;
