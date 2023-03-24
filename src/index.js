import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import cartReducer, { getTotals } from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

store.dispatch(getTotals());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);