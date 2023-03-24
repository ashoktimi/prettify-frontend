import React from 'react';
import { commonBeforeEach, commonAfterEach } from "../testUtils";
import { render } from "@testing-library/react";
import Routers from '../routesNav/Routers';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../cart/cartSlice';

beforeEach(commonBeforeEach)
afterEach(commonAfterEach)

describe('App', () => {
  const store = configureStore({
    reducer: {
      cart: cartReducer
    }
  });

  test("renders without crashing", function () {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("matches snapshot", function () {
    const { asFragment } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Routers component renders correctly', () => {
    render(
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  });
});





