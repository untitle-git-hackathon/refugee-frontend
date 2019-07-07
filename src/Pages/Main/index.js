import React from 'react';
import { withRouter } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import SplashMain from 'Image/Splash.png'
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
      showCha: 'none',
    }
  }

  componentDidMount = () => {
    this.hideMain();
    this.showCha();
  }

  hideMain = () => {
    setTimeout(() => {
      this.setState({
        hideMain: true
      });
    }, 3000);
  }

  showCha = () => {
    setTimeout(() => {
      this.setState({
        showCha: 'block'
      });
    }, 5000);
  }

  render() {
    return (
      <div className="container">
        <div className="main_wrapper">
          <img src={SplashMain} className={`main_img ${this.state.hideMain && `mainImg_hide`}`} />

          <div className="horiz_scroll_div_show" style={{display: this.state.showCha}}>
              <img className="person_body" src={Samira} />
              <img className="person_body" src={Somalia} />
              <img className="person_body" src={Syria} />
          </div>
        </div>
      </div>
    )
  }

}


export default withRouter(Main);
