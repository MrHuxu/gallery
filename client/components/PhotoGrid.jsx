import React from 'react';

import Photo from './Photo';

const PhotoGrid = () => {
  let photoes = [];
  for (let i = 1; i < 15; i++) {
    photoes.push(<Photo url = {`https://raw.githubusercontent.com/MrHuxu/img-repo/master/gallery/WechatIMG${i}.jpeg`} />);
  }
  return (
    <div>
      PhotoGrid
      { photoes }
    </div>
  );
};

export default PhotoGrid;
