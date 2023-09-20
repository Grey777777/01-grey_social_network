import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect  = (state) => {
		return {
			isAuth: state.auth.isAuth
		}
	}
export const  withAuthRedirect = (Component) => {
	const RedirectComponentContainer=(props)=>{
		if(!props.isAuth){
			return(
				<Navigate to="/login"/>
			)
		}else{
			return(
		 		<Component {...props}/>
		 	)
		}
	  }
	
	let connectAuthRedirectComponentContainer = connect (mapStateToPropsForRedirect)(RedirectComponentContainer);
	
	return (
		connectAuthRedirectComponentContainer
		)
}

