import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import './index.css'
import store from "./redux/Store";
import { Provider } from "react-redux";
// import { BrowserRouter } from 'react-router-dom'; //need to install react-router-dom by {npm i react-router-dom}
import { ToastContainer} from "react-toastify";   // to get add to cart effect
import 'react-toastify/dist/ReactToastify.css';

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer
      theme="dark"
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseOnHover={false}
      />
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
