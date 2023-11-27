import './App.css';
import React from 'react';
import Header from './header';
import AboutPage from './AboutReact';
import HomePage from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Router>
      <div className="App">
      <main className="flex-grow-1">
        <Header/>
        <Routes>
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/AboutReact" element={<AboutPage/>}/>
        </Routes> 
      </main>
      </div>
    </Router>
    </div>
  );
};

export default App;
