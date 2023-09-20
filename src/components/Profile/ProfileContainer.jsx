import React from "react";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {getUserProfile,getStatus,updateStatus} from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { compose } from "redux";

class ProfileContainer extends React.Component {

	

	componentDidMount = () => {
		let profileId = this.props.router.params.userId;
		//if (!profileId) profileId = 28132;    // мой id, если нет иного id
		if(!profileId){
			profileId = this.props.authorizedUserId;
		}
		this.props.getUserProfile(profileId);
		this.props.getStatus(profileId)
		
	}

	render(){
		return(
			<Profile {...this.props} 
					profile = {this.props.profile} 
					status = {this.props.status}
					updateStatus = {this.props.updateStatus}/>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.id,
	isAuth: state.auth.isAuth
})


function withRouter(Component) {

	function ComponentWithRouterProp(props) {
	
		 let params = useParams();
		 return (
			  <Component {...props}
					router={{ params }}
			  />
		 );
	}
	return ComponentWithRouterProp;
}

export default compose(
	connect(mapStateToProps, {getUserProfile,getStatus,updateStatus}),
	withRouter
	// ,
	// withAuthRedirect
)(ProfileContainer)


