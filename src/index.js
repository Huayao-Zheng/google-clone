import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { GSearchContextProvider } from './contexts/GSearchContextProvider';

import './index.css';

ReactDOM.render(
    <GSearchContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GSearchContextProvider>,
    document.getElementById('root')
);
