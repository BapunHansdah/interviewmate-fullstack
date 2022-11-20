import React from 'react'
import App from './App'
import store from './store'
import {Provider} from 'react-redux'
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);

