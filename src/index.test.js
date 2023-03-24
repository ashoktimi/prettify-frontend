import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';
import { commonBeforeEach, commonAfterEach } from "./testUtils";
import App from './app/App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';


beforeEach(commonBeforeEach)
afterEach(commonAfterEach)

describe('Index', () => {
  it('renders correctly', () => {
    const store = configureStore({
      reducer: {
        cart: cartReducer
      }
    });

    const root = document.createElement('div');
    act(() => {
      createRoot(root).render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });

    expect(root).toMatchSnapshot();
  });
});

