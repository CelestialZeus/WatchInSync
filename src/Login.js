import './Login.css';

import React, { useState } from 'react'
import logo from './assets/logo.gif';
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { authent } from './Firebase';
import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function Login() {


    const [emailaddress, setEmailaddress] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilepic, setProfilepic] = useState("");
    const [signup, setSignup] = useState(false);
    const dispatch = useDispatch();


    const signUpHandler = e => {
        e.preventDefault();
        setSignup(true);
    }

    const signInHandler = e => {
        e.preventDefault();
        setSignup(false);
    }

    const loginHandler = e => {
        e.preventDefault();
        if (!emailaddress) {
            return alert("Please enter your email-address");
        }
        signInWithEmailAndPassword(authent, emailaddress, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    fullname: userAuth.user.displayName,
                    profilepic: userAuth.user.photoURL,
                    uid: userAuth.user.uid,
                }
                ))
            })
    }
    const registerHandler = e => {
        e.preventDefault();
        if (!name) {
            return alert("Please enter your name");
        }
        if (!emailaddress) {
            return alert("Please enter your email-address");
        }

        createUserWithEmailAndPassword(authent, emailaddress, password)
            .then(userAuth => {
                updateProfile(authent.currentUser, {
                    displayName: name,
                    photoURL: profilepic
                })

                    .then(
                        dispatch(login({
                            email: userAuth.user.email,
                            fullname: name,
                            profilepic: profilepic,
                            uid: userAuth.user.uid,
                        })
                        ))
            })
            .catch(error => alert(error.message));
        console.log("Registered");
    }


    return (
        <div className="login">
            <div className="logo">
                <img src={logo} alt={"logo"} />
            </div>
            <div className="loginContainer">
                <form>
                    {signup &&
                        <div className="signupadditional">
                            <input className="form-control" type="name" name="name" value={name} placeholder="Your Full Name" onChange={e => setName(e.target.value)} /><br />
                            <input className="form-control" type="text" name="profilepic" value={profilepic} placeholder="Your Profile Picture link(Optional)" onChange={e => setProfilepic(e.target.value)} /><br />
                        </div>
                    }
                    <input className="form-control" type="emailaddress" name="emailaddress" value={emailaddress} placeholder="Your e-mail address" onChange={e => setEmailaddress(e.target.value)} /><br />
                    <input className="form-control" type="password" name="password" placeholder="Your Password" onChange={e => setPassword(e.target.value)} value={password} /><br />
                    {!signup &&
                        <button className="buttonsignin" type="submit" onClick={loginHandler} >Sign In</button>
                    }
                    {signup &&
                        <button className="buttonsignin" type="submit" onClick={registerHandler} >Sign Up</button>
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
