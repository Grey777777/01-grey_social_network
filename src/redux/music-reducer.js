import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_ALBUMS = 'SET_ALBUMS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT_ALBUMS = 'SET-TOTAL-COUNT-ALBUMS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_PROCESS_BLOCKING = 'TOGGLE_PROCESS_BLOCKING';

let initialState = {
	albums: [],
	countAlbums: 6,
	totalCountAlbums: 0,
	currentPage: 1,
	isFetching: false,
	processBlocking: []
}


const musicReducer = (state = initialState, action) => {
	switch(action.type){
		case FOLLOW:{
			return {
				...state,
				albums:state.albums.map(a=>{
					if(a.id === action.albumsId){
						return {...a, followed: true}
					}
					return a;
				})
			}
		}	
		case UNFOLLOW:{ 
			return {
				...state,
				albums: state.albums.map(a=>{
					if(a.id === action.albumsId){
						return{...a, followed: false}
					}
					return a;	
				})		
			}
		}
		case SET_ALBUMS:{
			return{...state, albums:[...action.albums]}
		}
		case SET_CURRENT_PAGE:{
			return{...state, currentPage:action.currentPage}
		}
		case SET_TOTAL_COUNT_ALBUMS:{
			return{...state, totalCountAlbums:action.totalCount}
		}
		case TOGGLE_IS_FETCHING:{
			return{...state, isFetching:action.isFetching}
		}
		case TOGGLE_PROCESS_BLOCKING:{
			return{
				...state,
				processBlocking: action.processBlocking?
				([...state.processBlocking, action.albumsId])
			   :(state.processBlocking.filter(id => id != action.albumsId))
				
			}
		}
		default:
			return state;
	}

}

export const follow = (albumsId) => ({type: FOLLOW, albumsId})
export const unfollow = (albumsId) => ({type: UNFOLLOW, albumsId})
export const setAlbums = (albums) => ({type: SET_ALBUMS, albums})
export const setCurrentPage = (any_value) => ({type: SET_CURRENT_PAGE, currentPage: any_value})
export const setTotalCountAlbums = (any_value) => ({type: SET_TOTAL_COUNT_ALBUMS, totalCount: any_value })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleProcessBlocking = (processBlocking,albumsId) => ({type: TOGGLE_PROCESS_BLOCKING, processBlocking,albumsId})

export const getAlbums = (currentPage, countAlbums) => {
	return (  //  return function  возвращаем функцию
		(dispatch)=>{
			dispatch(toggleIsFetching(true))
			usersAPI.getUsers(currentPage, countAlbums).then((data) => {
				dispatch(toggleIsFetching(false))
				dispatch(setCurrentPage(currentPage));
				dispatch(setAlbums(data.items));
				dispatch(setTotalCountAlbums(data.totalCount));
			});
	    }
	)
}
export const setUnfollow =(albumsId) =>{
	return(
		(dispatch)=>{
			dispatch(toggleProcessBlocking(true,albumsId))	
			usersAPI.delFollow(albumsId).then(data => {
				if(data.resultCode == 0){
					dispatch(unfollow(albumsId));
				}
				dispatch(toggleProcessBlocking(false,albumsId))
			});
		}
	)
}
export const setFollow = (albumsId) => {
	return (
		(dispatch)=>{
			dispatch(toggleProcessBlocking(true,albumsId))
			usersAPI.postFollow(albumsId).then(data => {
				if(data.resultCode == 0){
					dispatch(follow(albumsId));
				}
				dispatch(toggleProcessBlocking(false,albumsId))
			});
		}
	)
}

export default musicReducer;
