import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { UserProvider,  commonBeforeEach, commonAfterEach } from "../testUtils";
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../cart/cartSlice';
import ProductCard from "./productCard";
import ProductRating from './ProductRating';

beforeEach(commonBeforeEach)
afterEach(commonAfterEach)

describe('ProductCard', () => {
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
            <ProductCard />
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
           <ProductCard />
         </UserProvider>          
        </Provider>    
      </MemoryRouter>  
     );
    expect(asFragment()).toMatchSnapshot();
  });
    
  test("ProductRating component renders correctly ", function () {
    render(
      <MemoryRouter>
         <ProductRating />
      </MemoryRouter>   
     );
  });
})
