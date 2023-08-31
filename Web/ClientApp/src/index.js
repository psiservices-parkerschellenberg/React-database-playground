import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
//import './assets/scss/main.scss';
//import "react-datepicker/dist/react-datepicker.css";
//import { BrowserRouter } from 'react-router-dom';

//import "@popperjs/core";
//import "bootstrap";

//import { HelmetProvider } from 'react-helmet-async';

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


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
    </QueryClientProvider>
);