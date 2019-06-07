import React, { Component } from "react";

export default class UserRegistration extends Component {
  state = {
    userName: "",
    message: ""
  };
  registerUser = () => {
    console.log(this.state);
    const newUser =
      "Name: " + this.state.userName + "|" + "Msg: " + this.state.message;
    this.props.setData(newUser);
  };
  render() {
    return (
      <div>
        <h3>User registration</h3>
        <input
          onChange={e =>
            this.setState({
              userName: e.target.value
            })
          }
          type="text"
          placeholder="User name"
        />
        <input
          onChange={e =>
            this.setState({
              message: e.target.value
            })
          }
          type="text"
          placeholder="message"
        />
        <button onClick={this.registerUser}>Submit</button>
      </div>
    );
  }
}
