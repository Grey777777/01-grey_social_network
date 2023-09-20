import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

	_state: {
		profilePage: {
			posts:[
				{id:'1', message:'Change all', like:'10'},
				{id:'2', message:'Hello, Dina!', like:'20'}
			],
			newPostText:"Hello, React"		
		},
		dialogsPage: {
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
				{ id: "3", message: "Hello, Grey" }
			],
			newMessageText:""
		},
		sidebar: {

		}
		
	},

	getState(){
		return this._state;
	},

	_callSubscriber(){
	},

	subscribe(observer){
		this._callSubscriber = observer ;
	},


	dispatch(action){
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state);

		
	}
}


export default store;

//window.store = store;













