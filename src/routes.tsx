import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import Medilanding from './pages/Medilanding';
function Routes(){
  return (
    <BrowserRouter>
    <Switch>
       <Route path="/" exact component={Landing}></Route>
       <Route path="/medilanding" exact  component={Medilanding}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;