import React from "react";

export default function AllUsers(props) {
  var result = "";
  const getAllUsers = () => {
    document.getElementById("username").innerHTML = props.userName;
    // console.log({ props });
    result = props.data;
    props.setAllUsers();
  };

  return (
    <div>
      <h3>Get all users</h3>
      <p id="username" />
      <div>Username is {props.userName}.</div>
      <button onClick={getAllUsers}>Get all users</button>
      <br />
      {result}
    </div>
  );
}

//export default AllUsers;
