import './Login.css';

import React, { useState } from 'react'
import logo from './assets/logo.gif';


function Login() {
    const [data, setData] = useState({
        emailaddress: "",
        password: ""
    });
    const { emailaddress, password } = data;
    const submitHandler = e => {
        e.preventDefault();
        console.log(data);
    }
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }
    return (
        <div className="login">
            <div className="logo">
                <img src={logo} alt={"logo"} />
            </div>
            <div className="loginContainer">
                <form onSubmit={submitHandler}>
                    <input className="form-control" type="emailaddress" name="emailaddress" value={emailaddress} placeholder="Your e-mail address" onChange={changeHandler} /><br />
                    <input className="form-control" type="password" name="password" placeholder="Your Password" onChange={changeHandler} value={password} /><br />
                    <input className="SubmitButton" type="submit" name="submit" value="Sign In" />
                </form>
                <p className='signuptext'>New to WatchInSync? <a href="#"> Click here to register</a></p>
            </div>

        </div>
    )
}

export default Login
