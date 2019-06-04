import React from "react";

export default function AllUsers(props) {
  const getAllUsers = () => {
    console.log({ props });
  };
  return (
    <div>
      <h3>Get all users</h3>
      <div>my name is {props.userName}.</div>
      <button onClick={getAllUsers}>Get all users</button>
    </div>
  );
}

//export default AllUsers;
