import { authAPI } from '../api/api';
import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';



let InitialState = {
	initialized: false
}

const AppReducer =(state = InitialState, action)=>{
	//console.log('state  >>>', state)
	switch(action.type){
		case INITIALIZED_SUCCESS:{
			return{
				...state,
				initialized: true	
			}
		}
		
		default: return state;
	}
}

export const initializedSuccess =()=>({type:INITIALIZED_SUCCESS})



//Thunk
export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getAuthUserData());
	
	//dispatch(setState());
	//dispatch(setState());
	Promise.all([promise])
		.then(()=>{
			dispatch(initializedSuccess());
		})
}
	


export default AppReducer;
