import React from 'react';
import { withRouter } from 'react-router-dom';

import * as constants from '../../constants.js';
import './Main.scss';


class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <div className="container">
        <Menubar />

        <Footer />
      </div>
    )
  }

}


export default withRouter(Main);