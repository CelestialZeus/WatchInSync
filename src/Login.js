import './Login.css';

import React, { useState } from 'react'
import logo from './assets/logo.gif';


function Login() {
    const [data, setData] = useState({
        emailaddress: "",
        password: "",
        name: "",
        profilepic: "",
        signup: false,
    });


    const { emailaddress, password, name, profilepic, signup } = data;
    const submitHandler = e => {
        e.preventDefault();
        console.log(data);
    }

    const signUpHandler = e => {
        e.preventDefault();
        setData({ signup: true });
    }

    const signInHandler = e => {
        e.preventDefault();
        setData({ signup: false });
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
                    {signup &&
                        <div className="signupadditional">
                            <input className="form-control" type="name" name="name" value={name} placeholder="Your Full Name" onChange={changeHandler} /><br />
                            <input className="form-control" type="text" name="profilepic" value={profilepic} placeholder="Your Profile Picture link" onChange={profilepic} /><br />
                        </div>
                    }
                    <input className="form-control" type="emailaddress" name="emailaddress" value={emailaddress} placeholder="Your e-mail address" onChange={changeHandler} /><br />
                    <input className="form-control" type="password" name="password" placeholder="Your Password" onChange={changeHandler} value={password} /><br />
                    {!signup &&
                        <button className="buttonsignin">Sign In</button>
                    }
                    {signup &&
                        <button className="buttonsignin">Sign Up</button>
                    }
                </form>
                {!signup &&
                    <p className='signuptext'>New to WatchInSync? <a href="#" onClick={signUpHandler}> Click here to register</a></p>
                }
                {signup &&
                    <p className='signuptext'>Already have an account? <a href="#" onClick={signInHandler}> Click here to sign in</a></p>
                }
            </div>

        </div>
    )
}

export default Login
