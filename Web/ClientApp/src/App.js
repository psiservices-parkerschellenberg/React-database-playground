import React, { Suspense } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/HomePage';
import NavMenu from './components/NavMenu';

const App = () => {

    return (
        <div>
            <div>
                <NavMenu />
            </div>
            <div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
            <div className='m-4'>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};

export default App;