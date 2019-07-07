import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Main from './Pages/Main/index.js';
import ChaSelect from './Pages/ChaSelect/index.js'
import ShowMap from './Pages/ShowMap/index.js'
import Chat from './Pages/Chat/index.js';


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/cha_select" component={ChaSelect} />
          <Route exact path="/show_map" component={ShowMap} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
