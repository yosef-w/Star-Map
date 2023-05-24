import './App.css';
import React, { useState } from 'react';
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Results from './pages/results/Results';
import { Routes, Route } from "react-router-dom";

function App() {

  const [responseData, setResponseData] = useState(null);

  return (
    <div className="App">
      <Navbar />
        <div>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/results' element={<Results responseData={responseData} />} />
            </Routes>
    
        </div>
    </div>
  );
  }


export default App;
