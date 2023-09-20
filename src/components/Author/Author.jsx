import React, {useState} from "react";
import cl from './Author.module.css';
import avatar from '../../images/liza.jpg';
import Preloader from "../common/Preloader/Preloader";
import { AuthorStatus } from "./AuthorStatus/AuthorStatus";

const Author =(props)=>{
	
	
	if(!props.author){
		return(<Preloader/>)
	}

	
	return(
		<div className={cl.content}>
			
			<div className={cl.photo}>
				<img src={props.author.photos.large !=null ? (props.author.photos.large):(avatar)} alt="avatar" />
			</div>
			
			<div className={cl.userName}>{props.author.fullName}</div>
			<div className={cl.userId}>{props.author.userId}</div>
			<AuthorStatus 	status={props.status}
						  	updateAuthorStatus={props.updateAuthorStatus}/>
		</div>
	)
}

export default Author;
