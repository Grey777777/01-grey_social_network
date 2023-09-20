import React from "react";
import cl from './Notes.module.css';
import Note from "./Note/Note";

function Notes(props) {
	
	let state = props.notesPage;
	
	let stateNote = state.notes.map((n) => <Note id={n.id} title={n.title} text={n.text}/>)

	function addNote(){
		props.onAddNote();
	}

	function onChangeTitle(e){
		let anyTextTitle = e.target.value;
		props.updateOnChangeTitle(anyTextTitle);
	}

	function onChangeText(e){
		let anyTextText = e.target.value;
		props.updateOnChangeText(anyTextText);
	}

  return (
    <div className={cl.content}>
	  
      {stateNote}
	  <div className={cl.inputNotes}>
		<div>
			<textarea onChange={onChangeTitle} value={state.notesSymbolTitle}></textarea>
			<p></p>
			<textarea onChange={onChangeText} value={state.notesSymbolText}></textarea>
		</div>
		<div className={cl.butPush}>
			<button onClick={addNote}>Push</button>
		</div>
	  </div>

    </div>
  )	
}

export default Notes;
