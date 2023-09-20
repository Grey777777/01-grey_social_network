import React, {useEffect, useState} from "react";
import cl from "./AuthorStatus.module.css";

function AuthorStatus(props) {

	let [editMode,setEditMode] = useState(false)
		const activateEditMode = () => {
			setEditMode(true)
		}
		const deactivateEditMode = () => {
			setEditMode(false)
			props.updateAuthorStatus(status)
		}

	let [status, setStatus]=useState(props.status)
		const onChangeStatus = (e) => {
			setStatus(e.currentTarget.value)
		}

	useEffect(()=>{
		setStatus(props.status)
	},[props.status]);
	

  return (
	<div className={cl.userId}>
		{!editMode &&
		<div className={cl.status}>
			<span onDoubleClick={activateEditMode}>status: {props.status}</span>	
		</div>
		}
		
		{editMode &&
		<div className={cl.status}>
			<input onBlur={deactivateEditMode}
					autoFocus={true}
					onChange={onChangeStatus}
					value={status}/>
		</div>
		}
	
	</div>
  );
}

export  {AuthorStatus};
