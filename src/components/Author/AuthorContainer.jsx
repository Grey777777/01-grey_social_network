import React from "react";
import { connect } from "react-redux";
import Author from "./Author";
import {getAuthorStatus,getAuthor,updateAuthorStatus} from '../../redux/author-reducer';
import { useParams} from 'react-router-dom';

let WithRouterAuthorContainer =
	function withRouter(Children){
		return(
			(props)=>{const match = {params:useParams()};
			return <Children {...props} match = {match}/>
			}
		)
	}

class AuthorContainer extends React.Component{
	
	

	componentDidMount=()=>{
		let authorId = this.props.match.params.authorId;
         if(!authorId) {
             authorId = 28132; //Пишем Ваш id
         }

		this.props.getAuthor(authorId);
		this.props.getAuthorStatus(authorId);
		
	}
	


	render=()=>{
		return(
			<Author {...this.props} author = {this.props.author}
									status = {this.props.status}
									updateAuthorStatus={this.props.updateAuthorStatus}/>
		)
	}
}

let mapStateToProps = (state) => ({
	author:state.authorPage.author,
	status:state.authorPage.status
})

export default connect(mapStateToProps,{getAuthorStatus,getAuthor,updateAuthorStatus})(WithRouterAuthorContainer(AuthorContainer));
