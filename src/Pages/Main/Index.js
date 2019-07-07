import React from 'react';
import { withRouter } from 'react-router-dom';

import SplashMain from 'Image/Splash.png'
import MapImage from 'Image/Map.png'
import Samira from 'Image/Samira_body.png'
import Somalia from 'Image/Somalia_body.png'
import Syria from 'Image/Syria_body.png'
import * as constants from '../../constants.js';
import './Main.scss';


class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      hideMain: false,
    }
  }

  componentDidMount = () => {
  }

  hideMain = () => {
    this.setState({
      hideMain: true,
    })
    setTimeout(() => {
      this.props.history.push('/cha_select')
    }, 1200);
  }

  render() {
    return (
      <div className="container">
        <div className="main_wrapper" style={{backgroundImage: `url(${MapImage})`}} onClick={this.hideMain}>
          <img src={SplashMain} className={`main_img ${this.state.hideMain ? 'mainImg_hide' : 'mainImg_show'}`} />
        </div>
      </div>
    )
  }

}


export default withRouter(Main);