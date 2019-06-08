import React, { Component } from "react";
//import AllUsers from "./components/AllUsers";
import UserInfo from "./components/UserInfo";
import UserRegistration from "./components/UserRegistration";
import AllUsers from "./components/AllUsers";
//import Parent from "./components/Parent";

class App extends Component {
  state = {
    data: "",
    allUsers: "",
    pageView: ""
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
        <a
          style={{ margin: "10px" }}
          href="#"
          onClick={() =>
            this.setState({
              pageView: <UserRegistration setData={this.updateDate} />
            })
          }
        >
          Register
        </a>
        <a
          style={{ margin: "10px" }}
          href="#"
          onClick={() =>
            this.setState({
              pageView: <UserInfo data={this.state.data} />
            })
          }
        >
          User Info
        </a>
        <a
          style={{ margin: "10px" }}
          href="#"
          onClick={() =>
            this.setState({
              pageView: (
                <AllUsers
                  setAllUsers={this.getAllUsers}
                  data={this.state.data}
                />
              )
            })
          }
        >
          All Users
        </a>

        <br />

        {this.state.pageView}
      </div>
    );
  }
}

export default App;
