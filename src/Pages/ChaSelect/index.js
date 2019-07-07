import React from 'react';
import { withRouter } from 'react-router-dom';

import MapImg from 'Image/Map.png'
import Back1 from 'Image/back_1.png'
import Samira from 'Image/Samira_body.png'
import Somalia from 'Image/Somalia_body.png'
import Syria from 'Image/Syria_body.png'
import Man from 'Image/man_body.png'
import Grandma from 'Image/Grandma_body.png'
import * as constants from '../../constants.js';
import './ChaSelect.scss';




class Main extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        value: '',
        hideMain: false,
        showCha: false,
        backgroundChange: false,
      }
    }
  
    componentDidMount = () => {
      this.showCha();
    }
  
    showCha = () => {
      setTimeout(() => {
        this.setState({
          showCha: true,
        });
      }, 800);
    }
  
    handleClick = () => {
      setTimeout(() => {
        this.setState({
          showCha: false,
          backgroundChange: true,
        })
      }, 800);
      setTimeout(() => {
        this.props.history.push('/show_map')
      }, 2500);
    }

    render() {
      return (
        <div className="container">
          <div className="showCha_wrapper" style={{backgroundImage: `url(${MapImg})`}}>
            <img className={`${this.state.backgroundChange ? 'background_show' : 'background_hide'}`} src={Back1} />

            <div className={`horiz_scroll_div ${this.state.showCha ? 'horiz_scroll_div_show' : 'horiz_scroll_div_hide'}`}>
              <div className="body_div first_person_body" onClick={this.handleClick}>
                <p className="player_num">1P</p>
                <img className="person" src={Samira} />
              </div>
              <div className="body_div person_body">
                <p className="player_num">2P</p>
                <img className="person" src={Somalia} />
              </div>
              <div className="body_div person_body">
                <p className="player_num">3P</p>
                <img className="person" src={Syria} />
              </div>
              <div className="body_div person_body">
                <p className="player_num">4P</p>
                <img className="person" src={Grandma} style={{height: 270}} />
              </div>
              <div className="body_div last_person_body">
                <p className="player_num">5P</p>
                <img className="person" src={Man} style={{height: 250}} />
              </div>
            </div>

            <div className="play_btn">
              캐릭터를 선택하세요.
            </div>
          </div>
        </div>
      )
    }
  
  }
  
  
  export default withRouter(Main);