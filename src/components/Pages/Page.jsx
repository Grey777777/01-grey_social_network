import React from "react";
import cl from './Page.module.css';
import photo from '../../images/logoA.jpg'
import Preloader from "../common/Preloader/Preloader";

const Page =(props)=>{
	if(!props.books){
		return(<Preloader/>)
	}
	return(
		<div className={cl.content}>
			<div className={cl.photo}>
				<img src={photo} alt="avatar" />
			</div>
			<div className={cl.userName}>{props.books.name}</div>
			<div className={cl.userId}>{props.books.id}</div>
		</div>
	)
}

export default Page;
