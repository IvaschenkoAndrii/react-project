import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

import {setupStore} from "./redux";
import {Routes} from "react-router-dom";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        {/*<Routes>*/}
            <App/>
        {/*</Routes>*/}
    </Provider>
);

reportWebVitals();
