import React from "react";
import cl from "./Article.module.css";

function Article(props) {

	let state = props.articlePage;

	return (
		<div className={cl.content}>
		  <h1>List media</h1>
		  <hr/>{
				state.media.map((m)=>
				<div key={m.id} className={cl.list}>
					<div className={cl.bl1}>{m.id}</div>
					<div className={cl.bl2}>{m.type}</div>
					<div className={cl.bl3}>{m.title}</div>
					<div className={cl.bl4}>{m.body}</div>	
				</div>
		    )}
		  <hr/>
		</div>
	  );
	
}

export  {Article};
