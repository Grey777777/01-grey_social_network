import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import cl from './Login.module.css';
import { useDispatch, connect} from "react-redux";
import { LoginThunk } from "../../redux/auth-reducer";


const Login = (props) => {


const messages = useSelector(state => state.auth.messages);
const id = useSelector(state => state.auth.id);


const[email, setEmail] = useState('')
const[pass, setPass] = useState('')

const handleInputEmail = (e)=>{
	setEmail(e.target.value)
}
const handleInputPass = (e)=>{
	setPass(e.target.value)
}

const handleSubmit = (event) => {
	event.preventDefault();
	dispatch(LoginThunk(email,pass))
}
const dispatch = useDispatch()

if(props.isAuth){
	return <Navigate to={`/profile`}/>
}

  return (
	<div className={cl.content}>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Login</label><br/>
					<input type="text" name='email' placeholder={"email"} onChange={handleInputEmail}/>
				</div>
				<div>
					<label>Password</label><br/>
					<input type="password" name='pas' placeholder={"Password"} onChange={handleInputPass}/>
				</div>
				<div>
					<input type={"checkbox"} name='rememberMe'/>remember me
				</div>
				<button>Login</button>
			</form>
			<div className={cl.mess_error}>{messages}</div> 
	</div>
  ); 
}

// LOGIN

const mapStateToProps = (state) => ({
	isAuth:state.auth.isAuth
})


export default connect (mapStateToProps)(Login);

