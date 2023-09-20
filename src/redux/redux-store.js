import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import newsReducer from "./news-reducer";
import notesReducer from "./notes-reducer";
import musicReducer from "./music-reducer";
import libraryReducer from "./library-reducer";
import authorReducer from "./author-reducer";
import AuthReducer from "./auth-reducer";
import AppReducer from './app-reducer';
import thunkMiddleware from "redux-thunk";
import articleReducer from "./article-reducer";


let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	newsPage: newsReducer,
	notesPage: notesReducer,
	albumsPage: musicReducer,
	libraryPage: libraryReducer,
	authorPage: authorReducer,
	auth: AuthReducer,
	app: AppReducer,
	articlePage:articleReducer	
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
