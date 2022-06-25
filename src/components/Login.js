import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "./firebase";

import "./Styles/Login.css";

function Login() {

  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e=>{
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history('/')
        })
        .catch(error=>alert(error.message))
   
  }

  const register = e=>{
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth) =>{
      console.log(auth);
      if(auth){
        history('/');
      }
    })
    .catch(error=> alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type = "text" value = {email} onChange={e=> setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value = {password} onChange={e=> setPassword(e.target.value)}/>

          <button type="submit"className="login__signInButton" onClick={signIn}>Sign In</button>
        </form>

        <p>
          Welcome to my Amazon Clone, programmed by Cory Campbell.
        </p>

        <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
