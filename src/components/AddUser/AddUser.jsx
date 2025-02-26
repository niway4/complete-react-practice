import React, { useState } from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import UserList from "../UserList/UserList";

const Customer = () => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
const [error, setError] = useState();

  const UserNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const AgeHandler = (event) => {
    setAge(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age",
      });
      return;
    }
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: userName, age: age, id: Math.random().toString() },
      ];
    });
    setUserName("");
    setAge("");
  };

const errorHandler = () => {
  setError(null);
}
  return (
    <div>
       {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler} />} 
      <Card className="input">
        <form onSubmit={SubmitHandler} action="submit">
          <label htmlFor="username">Username</label>
          <input onChange={UserNameHandler} value={userName} id="input" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input onChange={AgeHandler} value={age} id="age" type="number" />
          <Button type="submit" className="button">
            Add User
          </Button>
        </form>
      </Card>
     <UserList users={users}/>
    </div>
  );
};

export default Customer;
