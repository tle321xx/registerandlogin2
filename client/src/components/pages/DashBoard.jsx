import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { UserContextProvider } from "../../../context/userContext";

const DashBoard = () => {
  const { user } = useContext(UserContext);
  return (
    <>
    <UserContextProvider>
      <h1>DashBoard</h1>
      {!!user && (<h2>Hi {user.name}</h2>)}
      </UserContextProvider>
    </>
  );
};

export default DashBoard;
