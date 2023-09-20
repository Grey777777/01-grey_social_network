import { usersAPI,profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SET_DATA_FILE = 'SET-DATA-FILE';

let initialState = {
	posts:[
		{id:'1', message:'Change all', like:'10'},
		{id:'2', message:'Hello, Dina!', like:'20'}
	],
	profile: null,
	status: ""
}

const profileReducer = (state = initialState, action) =>{
	let stateCopy = {
		...state
	}
	switch (action.type){
		case ADD_POST:{ 
			stateCopy.posts.push({id: 3, message: action.newPostText,like: 15 });
			return stateCopy;
		}	
		case UPDATE_NEW_POST_TEXT:{ 
			stateCopy.newPostText = action.newText;
			return stateCopy;
		}
		case SET_USER_PROFILE:{ 
			stateCopy.profile = action.profile;
			return stateCopy;
		}
		case SET_STATUS:{ 
			stateCopy.status = action.status;
			return stateCopy;
		}
		case SET_DATA_FILE:{ 
			// stateCopy.profile.photos = action.photos;
			// return stateCopy;
			return{
				...state,
				profile:{...state.profile, photos:action.photos}
			}
		}

		default:
			return state;	
	}
}


export const updateNewPostTextActiveCreator = (text) =>
	({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addPostActiveCreator = (newPostText) => ({type: ADD_POST,newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE,profile})
export const setStatus = (status) => ({type: SET_STATUS,status})
export const setDataFile = (photos) => ({type: SET_DATA_FILE, photos})

//Thunks
export const getUserProfile = (profileId) => {
	return (
		(dispatch) => {
			usersAPI.getProfile(profileId).then((data) =>{  // .then((data) = .then(response => {return response.data;}) 
				dispatch(setUserProfile(data));
			}
		)}
	)
}

export const getStatus = (profileId) => (dispatch) => {
	profileAPI.getStatus(profileId)
		.then(response => {
			dispatch(setStatus(response.data));		
		});
		
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export const submitDataFile = (dataFile) => (dispatch) => {
	console.log('dataFile  >>>', dataFile)
	profileAPI.submitFile(dataFile)
		.then(response => {
			if (response.data.resultCode === 0){
				//dispatch(setDataFile(response.data.photos));
				console.log('response.data.photos  >>>', response.data.photos)
			}
		})
}

export default profileReducer;
