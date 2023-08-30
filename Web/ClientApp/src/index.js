import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>
);