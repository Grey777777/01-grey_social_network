import React, { useEffect } from "react";
import cl from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./Profileinfo/Profileinfo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getStatus, getUserProfile, updateStatus } from "../../redux/profile-reducer";

function Profile(props) {

	const dispatch = useDispatch();
	const navigator = useNavigate();
	const {userId} = useParams();

	const profile = useSelector(state=>state.profilePage.profile);
	const status = useSelector(state=>state.profilePage.status);
	const authorizedUserId = useSelector(state=>state.auth.id);
	const isAuth = useSelector(state=>state.auth.isAuth);

	const getUserProfileF =(user)=> dispatch(getUserProfile(user));
	const getStatusF =(user)=> dispatch(getStatus(user));
	const updateStatusF =(status)=> dispatch(updateStatus(status));

	// при загрузке страницы учитываем что в Profile может зайти только пользователь после авторизации
	// посмотреть Profile может кто угодно
	useEffect(()=>{
		const user = !!userId? userId : authorizedUserId
		if (!userId && !authorizedUserId){
			navigator("/login") 
		}	
		getUserProfileF(user);
		getStatusF(user)
	},[userId])



  return (
    <div className={cl.content}>
      <Profileinfo profile = {profile} 
	  				status = {status}
					isAuth = {isAuth}
					authorizedUserId = {authorizedUserId} 
					updateStatus={updateStatusF}/>
      <MyPostsContainer isAuth = {isAuth}
						authorizedUserId = {authorizedUserId}/>
    </div>
  );
}

export default Profile;
