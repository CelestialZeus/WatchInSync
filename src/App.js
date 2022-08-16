import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { logout, selectUser } from './features/userSlice';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Login from './Login';
import { authent } from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)


  return (

    <div className="App">
      {user == null ? (
        <div className="loginpage">
          <Login />
        </div>
      ) : (
        <div className="appbody">
          <Sidebar />
          <TopBar />
        </div>)
      }
    </div >

  );
}

export default App;
