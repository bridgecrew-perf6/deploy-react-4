import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter as Router} from "react-router-dom";

import App from './App';

import './index.css'

const isDev = import.meta.env.MODE === 'development';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router basename={isDev ? '/' : '/deploy-react'}>
            <App/>
        </Router>
    </React.StrictMode>
)
