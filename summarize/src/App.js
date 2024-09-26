import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/Main";
import Generator from "./components/Generator";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cards" element={<Generator />} />
      </Routes>
    </Router>
  );
}

export default App;
