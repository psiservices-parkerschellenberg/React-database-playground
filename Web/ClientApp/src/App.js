import React from "react";
import './App.scss';
import NavBar from './NavBar';
import HomePage from './HomePage';
import QueryTesting from './QueryTesting';
import { Route, Routes } from 'react-router';

const App = () => {

    return (
        <div className="App">
            <div>
                <NavBar />
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/QueryTesting" element={<QueryTesting />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;