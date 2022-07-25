/* import React from "react";
import ReactDOM from "react-dom";
import App from './App'
ReactDOM.render(
    <App/> ,
    document.getElementById('root')
) */
import { BrowserRouter } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
    <App />
    </BrowserRouter>
);
