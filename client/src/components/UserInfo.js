import React, { Component } from "react";
import AllUsers from "./AllUsers";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      results: ""
    };
  }

  getUserInfo = () => {
    console.log("state", this.state);
    console.log("props", this.props);
    this.setState({
      results: this.props.data
    });
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
        {this.state.results}
      </div>
    );
  }
}
