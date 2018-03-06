import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import DemoTable from './components/DemoTable';
import Servertable from './components/Servertable';
import Rtables from './components/Rtable';
import Pichart from './components/Pichart';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DemoTable}/>
        <Route path='/t' component={Servertable}/>
        <Route path='/table' component={Rtables}/>
        <Route path='/chart' component={Pichart}/>
  </Route>
);
