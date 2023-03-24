import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { commonBeforeEach, commonAfterEach } from "../testUtils";
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import CheckoutPage from "./Checkout";


beforeEach(commonBeforeEach)
afterEach(commonAfterEach)

describe('CheckoutPage', () => {
 const store = configureStore({
   reducer: {
     cart: cartReducer
   }
 });

 test("renders without crashing", function () {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CheckoutPage />
        </Provider>    
      </MemoryRouter>   
     );
  });
  
  test("matches snapshot", function () {
    const { asFragment } = 
     render(
      <MemoryRouter>
        <Provider store={store}>
          <CheckoutPage />       
        </Provider>    
      </MemoryRouter>  
     );
    expect(asFragment()).toMatchSnapshot();
  });

})