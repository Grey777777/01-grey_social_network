import React, {useCallback} from "react";
import {Form} from '@altiore/form';
import Field from '../../../fields/Field';
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useSelector } from "react-redux";



function MyPosts(props) {

	const authorizedUserId = useSelector(state=>state.auth.id);
	const isAuth = useSelector(state=>state.auth.isAuth);
	const profile = useSelector(state=>state.profilePage.profile);

	let state = props.profilePage;
  
	let postsElements = state.posts.map( p => <Post message={p.message} like={p.like} />);

	let newPostElements = React.createRef();


	const handleSubmit = useCallback((values) => {
		//console.log('name',values.newPostText);
		props.addPost(values.newPostText);
	},[]);

  return (
    <div>
		{isAuth && profile.userId == authorizedUserId &&
				<div className={cl.post}>
		  <h3>My Post</h3>
		  <Form onSubmit={handleSubmit}>
			<Field.Text name="newPostText"/>
			<button >Add post</button>
		  </Form>
		  {postsElements}
		</div>
		}
	</div>
  );
}

export default MyPosts;
