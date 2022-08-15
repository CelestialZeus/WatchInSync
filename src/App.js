import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Login from './Login';

function App() {
  const user = useSelector(selectUser)
  return (

    <div className="App">
      {!user ? (
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
