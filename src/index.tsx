import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './BLL/store';
import {HashRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
