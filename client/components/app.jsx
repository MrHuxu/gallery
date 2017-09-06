import React from 'react';

import Menu from './menu';
import PhotoGrid from './photo-grid';
import SongList from './song-list';

import LeftPanel from './left-panel';
import RightPanel from './right-panel';

const App = () => (
  <div>
    <Menu />

    <LeftPanel>
      <SongList />
    </LeftPanel>

    <RightPanel>
      <PhotoGrid />
    </RightPanel>
  </div>
);

export default App;
