import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

function App() {
  return (
    <div className="App">

      <Sidebar />

      <TopBar />

      {/* <TrendingGlobal />

      <TrendingLocal />

      <Regional /> */}
    </div>
  );
}

export default App;
