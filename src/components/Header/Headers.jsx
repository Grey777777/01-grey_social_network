import React from "react";
import { useSelector } from "react-redux";
import cl from './Header.module.css';
import logo from '../../images/logoA.jpg';
import { NavLink, Navigate } from "react-router-dom";
import photo_0 from '../../images/photo_0.jpg';





export default function Header (props) {

    return(
         <div className={cl.header}>
            <div className={cl.logo}>
                <img src={logo} alt="logotype" />
            </div>
			<div className={cl.menu}>
				<div className={cl.m1}><NavLink to={'author/'}>author</NavLink></div>
				<div className={cl.m2}>menu2</div>
				<div className={cl.m3}>menu3</div>
				<div className={cl.m4}>menu4</div>
				<div className={cl.m5}>
					{props.isAuth ?
						(<>{props.login}</>)
						:(<img src={photo_0} alt="photoUser"/>)
					}
				</div>
			</div>
			<div className={cl.loginBlock}>
				<div className={cl.a1}><button>register</button></div>
				{props.isAuth
					?(<div className={cl.a2}><button onClick={()=>{props.LogoutThunk();}} title="Выйти">LogIn</button></div>)
					:(<div className={cl.a2}><NavLink to = {"/login"}><button title="Войти">LogOut</button></NavLink></div>)
				
				}
			</div>
        </div>  
    )
}
