import React, {useCallback} from "react";
import cl from "./Dialogs.module.css";
import { Form } from "@altiore/form";
import Field from '../../fields/Field';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";

function Dialogs(props) {

let state = props.dialogsPage;

let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)

let messagesElements = state.messages.map( m => <Message message={m.message}/>)



const handleSubmit = useCallback((values) => {
	console.log('name', values);
	props.addMessage(values.newMessageText);
  }, []); 


if(props.isAuth == false)return  <Navigate to="/login" /> ;


  return (
    <div className={cl.content}>
      <div className={cl.namesUsers}>{dialogsElements}</div>
      <div className={cl.messagesUsers}>
        <div className={cl.message}>{messagesElements}</div>
			<Form onSubmit={handleSubmit}>
				<Field.Text name="newMessageText"/>
				<button>AddMessage</button>
			</Form>
      </div>
    </div>
  )
}







export default Dialogs;
