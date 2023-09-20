import React from "react";
import cl from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={cl.navbar}>
      <div>
        <div className={cl.accordion}>
          <NavLink to="/profile" className={navData => navData.isActive ? cl.active :cl.accordion}>Profile</NavLink>
        </div>
        <div className={cl.accordion}>
          <NavLink to="/dialogs" className={navData => navData.isActive ? cl.active :cl.accordion}>Messages</NavLink>
        </div>
        <div className={cl.accordion}>
			<NavLink to="/users" className={navData => navData.isActive ? cl.active :cl.accordion}>Users</NavLink></div>
		<div className={cl.accordion}>
			<NavLink to="/news" className={navData => navData.isActive ? cl.active :cl.accordion}>News</NavLink></div>
		<div className={cl.accordion}>
			<NavLink to="/notes" className={navData => navData.isActive ? cl.active :cl.accordion}>Notes</NavLink></div>
        <div className={cl.accordion}>
			<NavLink to="/music" className={navData => navData.isActive ? cl.active :cl.accordion}>Music</NavLink></div>
        <div className={cl.accordion}>
			<NavLink to="/library" className={navData => navData.isActive ? cl.active :cl.accordion}>Library</NavLink></div>
		<div className={cl.accordion}>
			<NavLink to="/article" className={navData => navData.isActive ? cl.active :cl.accordion}>Article</NavLink></div>
      </div>
    </div>
  )
}

export default Navbar;
