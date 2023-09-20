import React from "react";
import cl from "./Note.module.css"; 

function Note(props) {
	return <div className={cl.article} key='id'>
		<div className={cl.articleText}>
			<div className={cl.title}>
				<b>{props.title}</b>
			</div>
			<div className={cl.news}>{props.text}</div>
		</div>
	</div>;
}
export default Note;
