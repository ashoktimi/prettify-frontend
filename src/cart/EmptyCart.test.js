import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { commonBeforeEach, commonAfterEach } from "../testUtils";
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import EmptyCart from "./EmptyCart";


beforeEach(commonBeforeEach)
afterEach(commonAfterEach)

describe('EmptyCart', () => {
 const store = configureStore({
   reducer: {
     cart: cartReducer
   }
 });

 test("renders without crashing", function () {
    render(
      <MemoryRouter>
        <Provider store={store}>
            <EmptyCart />
        </Provider>    
      </MemoryRouter>   
     );
  });
  
  test("matches snapshot", function () {
    const { asFragment } = 
     render(
      <MemoryRouter>
        <Provider store={store}>
           <EmptyCart />       
        </Provider>    
      </MemoryRouter>  
     );
    expect(asFragment()).toMatchSnapshot();
  });

})