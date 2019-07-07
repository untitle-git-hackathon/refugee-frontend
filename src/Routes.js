import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Main from './Pages/Main/index.js';
import Chat from './Pages/Chat/index.js';


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
