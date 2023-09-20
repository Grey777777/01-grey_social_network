import { profileAPI } from "../api/api";

const SET_AUTHOR = 'SET-AUTHOR';
const SET_STATUS = 'SET-STATUS';


let InitialState = {
	author: null,
	status: ""
}

const AuthorReducer =(state = InitialState, action)=>{
	switch(action.type){
		case SET_AUTHOR:{
			return{
				...state, author:action.author
			}
		}
		case SET_STATUS:{
			return{
				...state, status:action.status
			}
		}
		default: return state;
	}
}

export const setAuthor =(author)=>({type:SET_AUTHOR,author})
export const setStatus = (status) => ({type: SET_STATUS,status})

export const getAuthor = (authorId) => {
	return (
		(dispatch) => {
			profileAPI.getAuthorProfile(authorId)
				.then(response => {
					dispatch(setAuthor(response.data))
				})
			}
	)
}
export const getAuthorStatus = (authorId) => {
	return (
		(dispatch) => {
			profileAPI.getStatus(authorId)
				.then(response => {
					dispatch(setStatus(response.data))
				})
		}
	)
}
export const updateAuthorStatus = (status) => {
	return (
		(dispatch) => {
			profileAPI.updateStatus(status)
				.then(response => {
					if (response.data.resultCode === 0){
						dispatch(setStatus(status))
					}
				})
		}
	)
}



export default AuthorReducer;
