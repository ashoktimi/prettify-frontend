import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { UserProvider,  commonBeforeEach, commonAfterEach } from "../testUtils";
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../cart/cartSlice';
import Category from './Category';
import ProductCard from "../products/productCard";
import LoadingSpinner from "../helpers/LoadingSpinner";
import NavbarBottom from '../routesNav/NavBottom';

beforeEach(commonBeforeEach)
afterEach(commonAfterEach)

describe('Category', () => {
  const store = configureStore({
    reducer: {
      cart: cartReducer
    }
  });

test("renders without crashing", function () {
  render(
    <MemoryRouter>
      <Category />
    </MemoryRouter>   
   );
});

test("matches snapshot", function () {
  const { asFragment } = 
   render(
    <MemoryRouter>
      <Category />
    </MemoryRouter>   
   );
  expect(asFragment()).toMatchSnapshot();
});

test("ProductCard component renders correctly", function () {
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

test("LoadingSpinner component renders correctly ", function () {
  render(
    <MemoryRouter>
       <LoadingSpinner />
    </MemoryRouter>   
   );
});

test("NavbarBottom component renders correctly ", function () {
  render(
    <MemoryRouter>
       <NavbarBottom />
    </MemoryRouter>   
   );
});
})