import React, { useState } from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Customer = () => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState();

  const UserNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const AgeHandler = (event) => {
    setAge(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    console.log(userName);
    console.log(age);
  };
  return (
    <Card className="input">
      <form onSubmit={SubmitHandler} action="submit">
        <label htmlFor="username">Username</label>
        <input onChange={UserNameHandler} id="input" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input onChange={AgeHandler} id="age" type="number" />
        <Button  type="submit" className="button">
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default Customer;
