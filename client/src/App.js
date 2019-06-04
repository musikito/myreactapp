import React, { Component } from "react";
//import AllUsers from "./components/AllUsers";
import UserInfo from "./components/UserInfo";
import UserRegistration from "./components/UserRegistration";
//import Parent from "./components/Parent";

class App extends Component {
  render() {
    return (
      //inline styling
      <div style={{ margin: "10px", textAlign: "center" }} className="App">
        <h2>My Express App</h2>

        <UserInfo />
        <UserRegistration />
      </div>
    );
  }
}

export default App;
