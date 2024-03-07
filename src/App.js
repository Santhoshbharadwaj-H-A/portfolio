import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/portfolio/" element={<Home />}/>
              <Route index element={<Home />}/>
            </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
