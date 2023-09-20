import React from "react";
import Users from "./Users";
import {connect} from 'react-redux';
import {follow,unfollow,setCurrentPage,toggleFollowingProgress,requestUsers} from '../../redux/users-reducer';
import Preloader from "../common/Preloader/Preloader";
import { getUsers,getCurrentPage,getPageSize,getTotalUsersCount,getIsFetching,getFollowingInProgress } from "../../redux/users-selector";



class UsersContainer extends React.Component {
	componentDidMount(){
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	 }
	 onPageChange = (PageNumber) => {
		this.props.getUsers(PageNumber, this.props.pageSize);
	}
	render(){
		return ( 
			<>
				{this.props.isFetching ? (<Preloader/>):(null)}
				<Users
					pageSize = {this.props.pageSize}
					totalUsersCount = {this.props.totalUsersCount}
					currentPage = {this.props.currentPage}
					onPageChange = {this.onPageChange}
					users = {this.props.users}
					unfollow = {this.props.unfollow}
					follow = {this.props.follow}
					followingInProgress={this.props.followingInProgress}
					toggleFollowingProgress={this.props.toggleFollowingProgress}
				/>
			</>
		  );
	}
}	

// let mapStateToProps = (state) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress
// 	}
// }

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default connect(mapStateToProps,
		{follow,unfollow,setCurrentPage,
			toggleFollowingProgress,getUsers: requestUsers}						
	)(UsersContainer);

 
