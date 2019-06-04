import React, { Component } from "react";
import AllUsers from "./AllUsers";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ""
    };
  }

  getUserInfo = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <input
          onChange={e =>
            this.setState({
              userName: e.target.value
            })
          }
          type="text"
          placeholder="User Name"
        />
        <button onClick={this.getUserInfo}>Get user info</button>
        <AllUsers userName={this.state.userName} />
      </div>
    );
  }
}
