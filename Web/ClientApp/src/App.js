import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyToaster from './pages/toaster';
import Home from './pages/index';


function App() {
    return (
        <>
            
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/toaster' element={<MyToaster />} />
            </Routes>  
        </Router>
        </>
    );
}
export default App;