import React from "react";
import MyPosts from "./MyPosts";
import {addPostActiveCreator, updateNewPostTextActiveCreator} from "../../../redux/profile-reducer";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPostText) => {
			dispatch(addPostActiveCreator(newPostText))
		}
	}
}
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
