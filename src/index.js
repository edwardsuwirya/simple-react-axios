import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DepsProvider} from "./shared/depContext";
import ApiClientFactory from "./shared/apiClientFactory";
import clientInstance from "./shared/axiosClient";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DepsProvider apiClient={() => ApiClientFactory(clientInstance)}>
            <App/>
        </DepsProvider>
    </React.StrictMode>
);
