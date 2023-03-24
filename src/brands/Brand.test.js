import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { UserProvider,  commonBeforeEach, commonAfterEach } from "../testUtils";
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../cart/cartSlice';
import Brand from "./Brand";
import ProductCard from "../products/productCard";
import LoadingSpinner from "../helpers/LoadingSpinner";
import NavbarBottom from '../routesNav/NavBottom';

beforeEach(commonBeforeEach)
afterEach(commonAfterEach)

describe('Routes', () => {
const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

test("renders without crashing", function () {
  render(
    <MemoryRouter>
       <Brand />
    </MemoryRouter>   
   );
});

test("matches snapshot", function () {
  const { asFragment } = 
   render(
    <MemoryRouter>
      <Brand />
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
