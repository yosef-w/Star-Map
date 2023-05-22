import './App.css';
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Results from './pages/results/Results';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
        <div>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/results' element={<Results />} />
            </Routes>
    
        </div>
    </div>
  );
  }


export default App;
