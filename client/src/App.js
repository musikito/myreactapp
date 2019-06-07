import React, { Component } from "react";
//import AllUsers from "./components/AllUsers";
import UserInfo from "./components/UserInfo";
import UserRegistration from "./components/UserRegistration";
import AllUsers from "./components/AllUsers";
//import Parent from "./components/Parent";

class App extends Component {
  state = {
    data: "",
    allUsers: ""
  };

  getAllUsers = () => {
    this.setState({
      allUsers: this.state.data
    });
    this.forceUpdate();
  };
  updateDate = newData => {
    this.setState({
      data: newData
    });
  };
  render() {
    return (
      //inline styling
      <div style={{ margin: "10px", textAlign: "center" }} className="App">
        <h2>My Express App</h2>

        <UserInfo data={this.state.data} />
        <AllUsers setAllUsers={this.getAllUsers} data={this.state.data} />
        <UserRegistration setData={this.updateDate} />
      </div>
    );
  }
}

export default App;
