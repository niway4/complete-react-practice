import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div>
        <div onClick={props.onClick} className="backdrop"/>
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className="content">{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onClick}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
