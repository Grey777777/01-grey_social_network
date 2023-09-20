import Dialogs from "./Dialogs";
import {addMessageCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import {connect} from 'react-redux';
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: (newMessageText) => {
			dispatch(addMessageCreator(newMessageText))
		}
	}
} 

export default compose (
	connect (mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs)


