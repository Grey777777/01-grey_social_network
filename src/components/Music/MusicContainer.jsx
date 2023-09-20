import React from "react";
import Music from "./Music";
import {connect} from 'react-redux';
import {setFollow, setUnfollow, setAlbums} from '../../redux/music-reducer';
import {toggleProcessBlocking,getAlbums} from '../../redux/music-reducer';
import Preloader from '../common/Preloader/Preloader';

class MusicContainer extends React.Component {
	componentDidMount = () => {
		this.props.getAlbums(this.props.currentPage, this.props.countAlbums)
	}

	onChangePage = (pLink) => {
		this.props.getAlbums(pLink, this.props.countAlbums)
	}
  
	render() {
		return(
			<>
				{this.props.isFetching ? (<Preloader/>):(null)}
				<Music
					currentPage = {this.props.currentPage}
					onChangePage = {this.onChangePage}
					albums = {this.props.albums}
					setUnfollow = {this.props.setUnfollow}
					setFollow = {this.props.setFollow}
					totalCountAlbums = {this.props.totalCountAlbums}
					countAlbums = {this.props.countAlbums}
					toggleProcessBlocking = {this.props.toggleProcessBlocking}
					processBlocking = {this.props.processBlocking}
				/>
			</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		albums: state.albumsPage.albums,
		countAlbums: state.albumsPage.countAlbums,
		totalCountAlbums: state.albumsPage.totalCountAlbums,
		currentPage: state.albumsPage.currentPage,
		isFetching: state.albumsPage.isFetching,
		processBlocking: state.albumsPage.processBlocking
	}
}

// const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);
// export default MusicContainer;

export default connect (mapStateToProps,{ 
	setFollow,
		setUnfollow,
		setAlbums,
		toggleProcessBlocking,
		getAlbums
	})
	(MusicContainer);
