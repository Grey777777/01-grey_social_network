const ON_ADD_NOTE = 'ON-ADD-NOTE';
const UPDATE_ON_CHANGE_TITLE = 'UPDATE-ON-CHANGE-TITLE';
const UPDATE_ON_CHANGE_TEXT = 'UPDATE-ON-CHANGE-TEXT';

let initialState = {
	notes: [
		{id:1, title:'Note for jentlments', text: 'gentlemen drink and eat at 12 o\'clock '},
		{id:1, title:'Note for lady', text: 'women have breakfast at 10 o\'clock '}
	],
	notesSymbolTitle: 'Note for children',
	notesSymbolText: 'children have slip at 10 o\'clock '
}

const notesReducer = (state = initialState, action) => {
	let stateCopy = {
		...state,
		notes:[...state.notes]
	}
	switch (action.type){
		case ON_ADD_NOTE:
			let newNote = {
				id:3, 
				title: state.notesSymbolTitle, 
				text: state.notesSymbolText
			};
			stateCopy.notes.push(newNote);
			stateCopy.notesSymbolTitle = '';
			stateCopy.notesSymbolText = '';
			return stateCopy;
		
		case UPDATE_ON_CHANGE_TITLE:
			stateCopy.notesSymbolTitle = action.TextTitle;
			return stateCopy;

		case UPDATE_ON_CHANGE_TEXT:
			stateCopy.notesSymbolText = action.TextText;
			return stateCopy;
			
		default: 
			return state;
	}
}

export const onAddNoteAC = () => ({type: ON_ADD_NOTE});
export const updateOnChangeTitleAC = (any_let1) => 
	({type: UPDATE_ON_CHANGE_TITLE, TextTitle: any_let1})
export const updateOnChangeTextAC = (any_let2) => 
	({type: UPDATE_ON_CHANGE_TEXT, TextText: any_let2})

export default notesReducer;
