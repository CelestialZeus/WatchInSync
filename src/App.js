import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import TrendingGlobal from './TrendingGlobal';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <TopBar />
      {/*}
      <TrendingLocal />

      <Regional /> */}
    </div >
  );
}

export default App;
