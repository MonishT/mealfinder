// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="App" >
        <Header />
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
        <br/>
      </div>
    </Router>
  );
}

export default App;
