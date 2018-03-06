import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Rtables from './components/Rtable';
import Pichart from './components/Pichart';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Rtables}/>
        <Route path='/table' component={Rtables}/>
        <Route path='/chart' component={Pichart}/>
  </Route>
);
