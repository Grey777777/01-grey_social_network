import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./DialogItem.module.css";

function DialogItem(props) {
  let path = "/dialogs/";
  return (
    <div className={cl.name}>
      <NavLink to={path + props.id}>{props.name}</NavLink>
    </div>
  );
}


export default DialogItem;
