import React from 'react';

import Menu from './menu';
import PhotoGrid from './photo-grid';
import SongList from './song-list';

import DataBind from './data-bind';
import Scale from './scale';
import BarChart from './bar-chart';
import FullBarChart from './full-bar-chart';
import ChartAnimation from './chart-animation';
import UpdateEnterExit from './update-enter-exit';
import Interaction from './interaction';
import PieLayout from './pie-layout';

const App = () => (
  <div>
    <Menu />
    <PhotoGrid />
    <SongList />

    <DataBind />
    <Scale />
    <BarChart />
    <FullBarChart />
    <ChartAnimation />
    <UpdateEnterExit />
    <Interaction />
    <PieLayout />
  </div>
);

export default App;
