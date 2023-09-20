import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import cl from './App.module.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import NotesContainer from './components/Notes/NotesContainer';
import ArticleContainer from './components/Article/ArticleContainer';
import MusicContainer from './components/Music/MusicContainer';
import LibraryContainer from './components/Library/LibraryContainer';
import Page from './components/Pages/Page';
import AuthorContainer from './components/Author/AuthorContainer';
import  Login  from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import Profile from './components/Profile/Profile';

function App(props) { 

	const initialized = useSelector(state => state.app.initialized)

	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(initializeApp())
	},[])

	if(!initialized){
		return <Preloader/>
	}

	return (
		<div className={cl.app_wrapper}>
			<HeaderContainer />
			<Navbar />
			<div className={cl.app_wrapper_content}>
				<Routes>
					<Route path="/profile/:userId*" element={<Profile />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/dialogs/*" element={<DialogsContainer />} />
					<Route path="/users/*" element={<UsersContainer />} />
					<Route path="/news/*" element={<NewsContainer />} />
					<Route path="/notes/*" element={<NotesContainer />} />
					<Route path="/article/*" element={<ArticleContainer />} />
					<Route path="/music/*" element={<MusicContainer/>}/>
					<Route path="/library/*" element={<LibraryContainer/>}/>
					<Route path="/page/:id*" element={<Page/>}/>
					<Route path="/author/*" element={<AuthorContainer/>}/>
					<Route path="/author/:authorId*" element={<AuthorContainer/>}/>
					<Route path="/login/*" element={<Login/>}/>

				</Routes>
			</div>
		</div>
	);
}

export default App;
