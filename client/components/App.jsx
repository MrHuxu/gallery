import React from 'react';

import Menu from './Menu';
import PhotoGrid from './PhotoGrid';
import SongList from './SongList';

import DataBind from './data-bind';
import Scale from './scale';
import BarChart from './bar-chart';
import FullBarChart from './full-bar-chart';
import ChartAnimation from './chart-animation';

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
  </div>
);

export default App;
