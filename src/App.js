import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widget from './Components/Widget'

function App() {
  return (
    <div className="App">
      
      {/*<h1>Linga Bhairavi Devi</h1>*/}
       <Header />
       <div className="app_body">
       <Sidebar />
       <Feed />
       <Widget />
      </div>
    </div>
  );
}

export default App;
