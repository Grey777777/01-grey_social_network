import React from 'react';
import Header from './Headers';
import {connect} from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import {setAuthUserData,LogoutThunk,toggleIsFetching} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component{

componentDidMount=()=>{
	
}

render=()=>{
	return(
		<>
			{this.props.isFetching ? (<Preloader/>):(null)}
			<Header {...this.props} />
		</>
	)
}


}

let mapStateToProps = (state) => ({
	isAuth:state.auth.isAuth,
	login:state.auth.login,
})



export default connect(mapStateToProps,{
	setAuthUserData,LogoutThunk,toggleIsFetching})(HeaderContainer);
