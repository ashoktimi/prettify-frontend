import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { UserProvider,  commonBeforeEach, commonAfterEach } from "../testUtils";
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../cart/cartSlice';
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import LoadingSpinner from "../helpers/LoadingSpinner";

beforeEach(commonBeforeEach)
afterEach(commonAfterEach)

describe('Product', () => {
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
            <Product />
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
           <Product />
         </UserProvider>          
        </Provider>    
      </MemoryRouter>  
     );
    expect(asFragment()).toMatchSnapshot();
  });
  
  test("ProductDetail component renders correctly", function () {
    render(
      <MemoryRouter>
       <Provider store={store}>
        <UserProvider>
          <ProductDetail /> 
        </UserProvider> 
       </Provider>     
      </MemoryRouter>   
     );
  });
  
  test("LoadingSpinner component renders correctly ", function () {
    render(
      <MemoryRouter>
         <LoadingSpinner />
      </MemoryRouter>   
     );
  });
})
