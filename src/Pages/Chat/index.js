import React from 'react';
import { withRouter } from 'react-router-dom';
import Gesture from 'rc-gesture';
import './Chat.scss';
    
class Chat extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      chats: [
        <div className="one_message_div">
        <div className="message ref_message_div">
          the road the road the road the road the road
        </div>
        <div>
          <div className="triangle-topleft my_message" />
        </div>
      </div>,
      ],
    }
  }

  addChat() {
    this.setState(
      {
        chats: [
          ...this.state.chats,
          <div className="one_message_div">
          <div className="message ref_message_div">
            the road the road the road the road the road
          </div>
          <div>
            <div className="triangle-topleft my_message" />
          </div>
        </div>
        ]
      }
    );
  }
  
  render() {
    return (
      <Gesture onSwipe={
        (gestureStatus) => { 
          this.addChat()
          console.log(this.state.chats); 
        }
      }>
        <div className="container" onScroll={this.handleScroll}>
          <div className="chat_wrapper">
            {/* style={{backgroundImage: `url(${tempImg})`}} */}
            <div className="route_div">
              <p className="top_location">Tehran</p>
              <div className="route_line_inactive route_line_inactive_top" />
              <div className="route_circle_inactive" />
              <div className="route_line_inactive route_line_inactive_main" />
              <div className="route_circle_active" />
              <div className="route_line_active route_line_active_bottom" />
              <p className="bottom_location">Kabul</p>
            </div>

            <div className="total_message_div">
              {this.state.chats}
            </div>

            <div className="small_player_div">
              <div className="ref_player" />
              <div className="my_player" />
            </div>

          </div>
        </div>
      </Gesture>
      )
  }

}


export default withRouter(Chat);