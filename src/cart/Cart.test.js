import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { UserProvider, commonBeforeEach, commonAfterEach } from "../testUtils";
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import Cart from './Cart';
import EmptyCart from "./EmptyCart";


beforeEach(commonBeforeEach)
afterEach(commonAfterEach)

describe('Cart', () => {
 const store = configureStore({
   reducer: {
     cart: cartReducer
   }
 });

 test("renders without crashing", function () {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <UserProvider>
            <Cart />
          </UserProvider>
        </Provider>
      </MemoryRouter>
     );
  });
  
  test("matches snapshot", function () {
    const { asFragment } = 
     render(
      <MemoryRouter>
        <Provider store={store}>
          <UserProvider>
            <Cart />
          </UserProvider>
        </Provider>
      </MemoryRouter>
     );
    expect(asFragment()).toMatchSnapshot();
  });

  test('EmptyCart component renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
           <EmptyCart />       
        </Provider>    
      </MemoryRouter> 
    );
    expect(container).toMatchSnapshot();
  });
})