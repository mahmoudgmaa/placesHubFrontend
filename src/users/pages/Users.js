import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import * as reactBootstrap from "react-bootstrap";
import ErrorModal from "../components/ErrorModal";
import { useHttpCleint } from "../../shared/components/http-hook";

const Users = () => {
  const { isError, isLoading, error, errorHandler, sendRequset, setIsError } =
    useHttpCleint();
  const [users, setusers] = useState();
  useEffect(() => {
    const sendRequsetFunc = async () => {
      try {
        const fetchedUsers = await sendRequset(
          "http://localhost:4000/api/users"
        );
        setusers(fetchedUsers.users);
      } catch (error) {}
    };
    sendRequsetFunc();
  }, [sendRequset]);
  return (
    <>
      {isError && (
        <ErrorModal
          showModal={isError}
          setShowModal={setIsError}
          header={"something went wrong"}
          body={error}
          buttonText={"cancel"}
          oncancel={errorHandler}
        />
      )}

      {!isLoading && users && <UserList items={users} />}
      {isLoading && <reactBootstrap.Spinner animation="grow" />}
    </>
  );
};
export default Users;
