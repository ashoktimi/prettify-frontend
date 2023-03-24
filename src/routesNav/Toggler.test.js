import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { UserProvider,  commonBeforeEach, commonAfterEach} from "../testUtils";
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from "react-router-dom";
import cartReducer from '../cart/cartSlice';
import Toggler from "./Toggler";
import BrandList from "../brands/BrandList";
import CategoryList from "../categories/CategoyList";
import TagLists from "../tags/TagList";
import TypeList from "../types/TypeList";

beforeEach(commonBeforeEach)
afterEach(commonAfterEach)

describe('Toggler', () => {
  const store = configureStore({
    reducer: {
      cart: cartReducer
    }
  });

  test("renders without crashing", function () {
    render(
     <BrowserRouter>
      <Provider store={store}>
        <UserProvider>
          <Toggler />
        </UserProvider>
      </Provider>
    </BrowserRouter>
    );
  });
  
  test("matches snapshot", function () {
    const { asFragment } = render(
      <BrowserRouter>
        <Provider store={store}>
          <UserProvider>
            <Toggler />
          </UserProvider>
        </Provider>
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('BrandList component renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <UserProvider>
          <BrandList />
        </UserProvider>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  
  test('CategoryList component renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
          <UserProvider>
            <CategoryList />
          </UserProvider>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  
  test('TypeList component renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <UserProvider>
          <TypeList />
        </UserProvider>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  
  test('TagLists component renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <UserProvider>
          <TagLists />
        </UserProvider>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});