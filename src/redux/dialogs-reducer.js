
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
	dialogs:[
		{ id: "0", name: "Diana" },
		{ id: "1", name: "Sergei" },
		{ id: "2", name: "John" },
		{ id: "3", name: "Anna" }
	],
	messages:[
		{ id: "0", message: "Hello, Diana" },
		{ id: "1", message: "Hello, Sergei" },
		{ id: "2", message: "Hello, John" },
		{ id: "3", message: "Hello, Anna" },
		{ id: "3", message: "Hello, Grey!" }
	]
}

const dialogsReducer = (state = initialState, action) =>{
	let stateCopy = {
		...state,
		messages: [...state.messages]
	}
	switch (action.type){
		case ADD_MESSAGE:
			stateCopy.messages.push({id: "5", message: action.newMessageText});
			return stateCopy;

		default:
			return state;
	}
}


export const addMessageCreator = (newMessageText) => ({type: ADD_MESSAGE,newMessageText})

export default dialogsReducer;
