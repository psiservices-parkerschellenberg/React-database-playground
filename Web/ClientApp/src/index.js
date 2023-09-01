import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.scss';
//import "react-datepicker/dist/react-datepicker.css";
//import { BrowserRouter } from 'react-router-dom';

//import { HelmetProvider } from 'react-helmet-async';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './App';
//import Authorizer from "./Authorizer";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        },
    },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
);