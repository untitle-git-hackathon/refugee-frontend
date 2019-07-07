import React from 'react';
import { withRouter } from 'react-router-dom';

import Back1 from 'Image/back_1.png'
import Back2 from 'Image/back_2.png'
import Back3 from 'Image/back_3.png'
import Back4 from 'Image/back_4.png'
import Me from 'Image/Me.png'
import Samira from 'Image/Samira.png'
import * as constants from '../../constants.js';
import './ShowMap.scss';


class ShowMap extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      showChat : false,
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        showChat : true,
      })
    }, 300);
  }

  render() {
    return (
      <div className="container" onScroll={this.handleScroll}>
        <div className="chat_wrapper" style={{backgroundImage: `url(${Back1})`}}>

          <div className={`${this.state.showChat ? 'show_chat' : 'hide_chat'}`}>
            <div className="route_div">
              <p className="top_location">Tehran</p>
              <div className="route_line_inactive route_line_inactive_top" />
              <div className="route_circle_inactive" />
              <div className="route_line_inactive route_line_inactive_main" />
              <div className="route_circle_active" />
              {/* <div className="route_line_active route_line_active_bottom" /> */}
              <p className="bottom_location">Kabul</p>
            </div>

            <img className="big_left" src={Samira} />
            <img className="big_right" src={Me} />
          </div>
        </div>
      </div>
    )
  }

}


export default withRouter(ShowMap);