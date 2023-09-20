import {connect} from 'react-redux';
import {onAddNoteAC,updateOnChangeTitleAC,updateOnChangeTextAC} from '../../redux/notes-reducer';
import Notes from './Notes';


let mapStateToProps = (state) => {
	return {
		notesPage: state.notesPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		onAddNote: () => {
			dispatch(onAddNoteAC())
		},
		updateOnChangeTitle: (any_let3) => {
			dispatch(updateOnChangeTitleAC(any_let3))
		},
		updateOnChangeText: (any_let4) => {
			dispatch(updateOnChangeTextAC(any_let4))
		}
	}
}


const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(Notes);

export default NotesContainer;
