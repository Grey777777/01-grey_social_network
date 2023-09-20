import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from "./Users.module.css";
import avatar from "../../images/cate5.jpg";
import BlockButtonPages from '../common/BlockButtonPages/BlockButtonPages';


const Users = (props) => {
	
		
	return (
		<div className={cl.content}>
				
				<BlockButtonPages 
					totalCountBook = {props.totalUsersCount}
					countBook = {props.pageSize}
					currentPage = {props.currentPage}
					onCurrentPage = {props.onPageChange}
				/>
			  {props.users.map((u) => (
				
				<div key={u.id} className={cl.comments}>
				  <div className={cl.avatar}>
					<NavLink to={'/profile/'+u.id}>
						<img src={u.photos.small !== null? u.photos.small: avatar} alt="ava" />
					</NavLink>
					<div>
					  {u.followed ? 
						(
							<button disabled={props.followingInProgress.some(id => id === u.id)}
								onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
						) 
						:(
							<button disabled={props.followingInProgress.some(id => id === u.id)}
								onClick={() => {props.follow(u.id)
									}}>Follow</button>
						)
					  }
					</div>
				  </div>
		
				  <div className={cl.blockComment}>
					<div className={cl.nextComment}>{u.name}</div>
					<div className={cl.amountLike}>{u.status}</div>
					<div className={cl.city}>{u.id}</div>
					<div className={cl.country}>UrlName: {u.uniqueUrlName}</div>
				  </div>
				</div>
			  ))}
		</div>
	)
}

export default Users;
