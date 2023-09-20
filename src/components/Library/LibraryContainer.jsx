import React from "react";
import axios from 'axios';
import Library from './Library';
import Preloader from "../common/Preloader/Preloader";
import {connect} from 'react-redux';
import {follow,unfollow,setBooks,toggleIsFetching} from '../../redux/library-reducer';
import {setCurrentPage, setTotalCountBook, toggleIsBlockButton} from "../../redux/library-reducer";
import {usersAPI} from '../../api/api';

class LibraryContainer  extends React.Component {
	componentDidMount = () => {
		this.props.toggleIsFetching(true)
			
			usersAPI.getUsers(this.props.currentPage, this.props.countBook).then(data =>{
					this.props.toggleIsFetching(false)
					this.props.setBooks(data.items)
					this.props.setTotalCountBook(data.totalCount)
				})

	}
	onCurrentPage=(pageNumber)=>{
		this.props.toggleIsFetching(true)
		this.props.setCurrentPage(pageNumber)
		
			usersAPI.getUsers(pageNumber, this.props.countBook).then(data =>{
					this.props.toggleIsFetching(false)
					this.props.setBooks(data.items)
				})
	}

	render(){
		return(
			<>
				{this.props.isFetching?(<Preloader/>):(null)}
				<Library
					totalCountBook={this.props.totalCountBook}
					countBook = {this.props.countBook}
					currentPage = {this.props.currentPage}
					onCurrentPage = {this.onCurrentPage}
					books={this.props.books}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					toggleIsBlockButton={this.props.toggleIsBlockButton}
					isBlockButton={this.props.isBlockButton}
				/>
			</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		books: state.libraryPage.books,
		currentPage: state.libraryPage.currentPage,
		countBook: state.libraryPage.countBook,
		totalCountBook: state.libraryPage.totalCountBook,
		isFetching: state.libraryPage.isFetching,
		isBlockButton: state.libraryPage.isBlockButton
	}
}



export default connect(mapStateToProps,{
	follow,unfollow,setBooks,setCurrentPage,setTotalCountBook,toggleIsFetching,toggleIsBlockButton})(LibraryContainer);

