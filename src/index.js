import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DepsProvider} from "./shared/depContext";
import ApiClientFactory from "./shared/apiClientFactory";
import clientInstance from "./shared/axiosClient";
import jsonPlaceHolderService from "./services/jsonPlaceHolderService";

//create .env file in the root of the project
//set environment variables starting with REACT_APP_
//access it by process.env.REACT_APP_... in components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DepsProvider apiClient={() => ApiClientFactory(clientInstance)} services={{
            jsonPlaceHolderService
        }}>
            <App/>
        </DepsProvider>
    </React.StrictMode>
);
