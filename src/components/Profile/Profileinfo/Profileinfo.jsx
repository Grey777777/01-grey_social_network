import React, { useState, useRef } from "react";
import panorama from "../../../images/panorama.jpg";
import avatar from "../../../images/cate5.jpg";
import cl from "./Profileinfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
//import { ProfileStatus } from "./ProfileStatus";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import { useDispatch } from "react-redux";
import { submitDataFile } from "../../../redux/profile-reducer";

function Profileinfo(props) {
	const filePicker = useRef(null);
	const[selected,setSelected]= useState()
	const dispatch = useDispatch();

	const selectedFile = (event) => {
		setSelected(event.target.files[0])
	} 
	console.log('selected  >>>', selected)
	
	
	const submitFile = () => {
		dispatch(submitDataFile(selected))
	}
	const handelPick = () =>{
		filePicker.current.click();   //filePicker имеет текущее значение (current) и элемент, на котором
										// висит функция handelPick при клике по нему вызывает действие filePicker
	}

	

	if(!props.profile){
		return <Preloader/>
	}
  return (
    <>
      <div className={cl.panorama}>
        <img src={panorama} alt="panorama" />
      </div>
      <div className={cl.profile}>
        <div className={cl.avatar}>
          <img src={props.profile.photos.large !== null ? (props.profile.photos.large):(avatar)} alt="avatar" />
        </div>
        <div className={`${cl.vcProfile} ${cl.description}`}>
          <h3>{props.profile.fullName}</h3>
          <p>
		  My id: {props.profile.userId}
            <br />
            profession: kat
            <br />
            gender: male
            <br />
            <div className={cl.status}>
				<div><b>status:</b></div> 
				<div>
					<ProfileStatusWithHooks status={props.status}
									updateStatus={props.updateStatus}/>
				</div>
			</div>
          </p>
        </div>
      </div>
	  	{/* Если есть авторизация и ID профиля равно ID авторизации тогда блок показывается */}
		{ props.isAuth && props.profile.userId == props.authorizedUserId &&
			<div className={cl.butSubmit}>
				<button onClick={handelPick}>selectedFile</button>
					<input 	className={cl.hidden}
							type="file"
							onChange={selectedFile}
							ref={filePicker}
					/>
				<button  type="submit" onClick={submitFile}>Submit</button>
			</div>
		}
	</>
  );
}

export default Profileinfo; 
