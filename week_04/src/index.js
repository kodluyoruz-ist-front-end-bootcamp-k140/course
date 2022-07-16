import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider, ToastProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ToastProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ToastProvider>
);
