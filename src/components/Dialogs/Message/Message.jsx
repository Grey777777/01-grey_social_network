import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Message.module.css";


function Message(props) {
  return <div className={cl.message}>{props.message}</div>;
}


export default Message;
