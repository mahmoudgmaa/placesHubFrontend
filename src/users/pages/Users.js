import React from "react";
import UserList from "../components/UserList";
import img1 from "../../assests/user.png";

const Users = () => {

  return (
    <>
      <UserList items={users} />
    </>
  );
};
export default Users;
