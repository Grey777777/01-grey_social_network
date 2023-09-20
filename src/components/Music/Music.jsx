import React from "react";
import cl from './Music.module.css';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import avatar from '../../images/cate1.jpg';
import BlockButtonPages from "../common/BlockButtonPages/BlockButtonPages";
import { usersAPI } from "../../api/api";


const Music = (props) => {
  
    return (
      <div className={cl.content}>
				<BlockButtonPages  
					totalCountBook = {props.totalCountAlbums}
					countBook = {props.countAlbums}
					currentPage = {props.currentPage}
					onCurrentPage = {props.onChangePage}
				/>
        {props.albums.map((a) => (
          <div key={a.id} className={cl.comments}>
            <div className={cl.avatar}>
              <NavLink to={'/author/'+a.id}>
				<img src={a.photos.small !== null ? a.photos.small : avatar} alt="ava"/>
			  </NavLink>
              <div>
                {a.followed ? 
				  (<button disabled={props.processBlocking.some(id => id === a.id)}
						onClick={() => {props.setUnfollow(a.id)}}>Unfollow</button>)  
				:(<button disabled={props.processBlocking.some(id => id === a.id)}
					onClick={() => {props.setFollow(a.id)
						
						
						// props.toggleProcessBlocking(true,a.id)
						// usersAPI.postFollow(a.id).then(data => {
						// 	if(data.resultCode == 0){
						// 		props.follow(a.id);
						// 	}
						// 	props.toggleProcessBlocking(false,a.id)
						// });	
					}
				}>Follow</button>)}
              </div>
            </div>
            <div className={cl.blockComment}>
              <div className={cl.nextComment}>{a.name}</div>
			  <div className={cl.nextComment}>{a.status}</div>  
            </div>
          </div>
        ))}
      </div>
    );
}

export default Music;
