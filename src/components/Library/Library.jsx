import React from 'react';
import cl from './Library.module.css';
import BlockButtonPages from '../common/BlockButtonPages/BlockButtonPages';
import { usersAPI } from '../../api/api';

const Library = (props) => {
	

		return(
			<div className={cl.content}>
				
				<BlockButtonPages 
					totalCountBook = {props.totalCountBook}
					countBook = {props.countBook}
					currentPage = {props.currentPage}
					onCurrentPage = {props.onCurrentPage}
				/>
					
				{props.books.map((b)=>{
					return(
						<div key={b.id} className={cl.self}>
							<div className={cl.fol}>
								{b.followed ?
								(<button disabled={props.isBlockButton.some(function(id){
										return (id === b.id)})}
									onClick={()=>{
									props.toggleIsBlockButton(true, b.id)
									usersAPI.delFollow(b.id).then(data => {
										if(data.resultCode == 0){
										props.unfollow(b.id);}
										props.toggleIsBlockButton(false, b.id)
									})	
								}} >Unfollow</button>):
								(<button disabled={props.isBlockButton.some(function(id){
										return (id === b.id)})}
									onClick={()=>{
									props.toggleIsBlockButton(true, b.id)
									usersAPI.postFollow(b.id).then(data => {
										if(data.resultCode == 0){
										props.follow(b.id);}
										props.toggleIsBlockButton(false, b.id)
									})
								}}>Follow</button>)
								}
							</div>
							<div className={cl.name}>{b.name}</div>
						</div>
				)})}
			</div>
		)
}


export default Library;
