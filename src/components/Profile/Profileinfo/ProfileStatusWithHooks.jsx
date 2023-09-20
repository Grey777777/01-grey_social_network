import React, { useState, useEffect } from "react";
import cl from './Profileinfo.module.css'


const ProfileStatusWithHooks = (props) => {
	
	let [editMode, setEditMode] = useState(false);
		const activateEditMode = () => {
			setEditMode(true)
		}
		const deactivateEditMode = () => {
			setEditMode(false)
			props.updateStatus(status)
		}
	
	let [status, setStatus] = useState(props.status);
		const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

	useEffect( ()=>{
			setStatus(props.status);
		}, [props.status] );

		return (
			<>
				{!editMode &&
					<div>
					<span onDoubleClick={activateEditMode}>{props.status || "----- "}</span>
					</div>
				}
				{editMode &&
					<div>
					<input  onBlur={deactivateEditMode}
							autoFocus={true}
							onChange={onStatusChange}
							value={status}
							/>
					</div>
				}
			</>
		);
	
}

export  {ProfileStatusWithHooks};
