import { authAPI } from '../api/api';
import photo from '../images/photo.jpg';  
const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
//const SET_CHANGE_IS_AUTH = 'SET-CHANGE-IS-AUTH';
//const SET_PHOTO = 'SET-PHOTO';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';
const ERROR_MESSAGES = 'ERROR-MESSAGES';



let InitialState = {
	id: null,
    email: null,
    login: null,
	isAuth: false,
	isFetching: true,
	followingInProgress:false,
	messages: ''

	
	
	//isFetching: false
}

const AuthReducer =(state = InitialState, action)=>{
	//console.log('state  >>>', state)
	switch(action.type){
		case SET_AUTH_USER_DATA:{
			return{
				...state,
				...action.payload	
			}
		}
		// case SET_CHANGE_IS_AUTH:{
		// 	return{
		// 		isAuth: false
		// 	}
		// }
		// case SET_PHOTO:{
		// 	return{
		// 		...state,
		// 		...action.usersPhoto,
		// 		isAuth: true
		// 	}
		// }
		case TOGGLE_IS_FETCHING:{
			return{...state, isFetching: action.isFetching}	
		}
		case TOGGLE_FOLLOWING_IN_PROGRESS:{
			return{
				...state,
				followingInProgress: action.isFetching?
				([...state.followingInProgress.action.isFetching])
			   :(state.followingInProgress.action.isFetching)

			}
		}
		case ERROR_MESSAGES:{  console.log('action error  >>>', action)
			return{
				...state,
				messages: action.messages	
			}
		}
		default: return state;
	}
}

export const setAuthUserData =(id,email,login,isAuth)=>({type:SET_AUTH_USER_DATA,payload:{id,email,login,isAuth}})
//export const setChangeIsAuth =()=>({type:SET_CHANGE_IS_AUTH})
//export const setPhoto =(usersPhoto)=>({type:SET_PHOTO,usersPhoto})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching,userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching,userId});
export const errorMessages = (messages) => ({type: ERROR_MESSAGES, messages})


//Thunk
export const getAuthUserData = () => {
	return (
		(dispatch) => {
			dispatch(toggleIsFetching(true))
			return authAPI.me().then(response => {            // .then((data) = .then(response => {return response.data;})
				dispatch(toggleIsFetching(false))
				if(response.data.resultCode === 0){
					let {id,email,login} = response.data.data
					dispatch(setAuthUserData(id,email,login,true));
				}
			});
		}
	)
	
}

export const LoginThunk = (email,password,rememberMe)=>{ //console.log('email  >>>', email, password)
	return(
		dispatch => {
			dispatch(toggleIsFetching(true))
			authAPI.login(email,password,rememberMe).then(response =>{
				if(response.data.resultCode === 0){
					dispatch(getAuthUserData())
				}else{
					let messages = response.data.messages.length > 0 
					?(response.data.messages[0]):("Some error");
					dispatch(errorMessages(messages));
					//console.log('error  >>>', response.data.messages[0])
				}
			});
		}
	)
}

export const LogoutThunk = ()=>{
	return(
		dispatch => {
			dispatch(toggleIsFetching(true))
			authAPI.logout().then(response =>{
				if(response.data.resultCode === 0){
					dispatch(setAuthUserData(null,null,null,false))
				}
			});
		}
	)
}




export default AuthReducer;
