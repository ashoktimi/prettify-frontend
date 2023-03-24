import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { UserProvider,  commonBeforeEach, commonAfterEach} from "../testUtils";
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from "react-router-dom";
import cartReducer from '../cart/cartSlice';
import Routers from "./Routers";
import NavBar from './NavBar';
import Home from "../home/Home";
import Login from '../auth/LoginForm';
import SignupForm from "../auth/SignupForm";
import Brand from "../brands/Brand";
import BrandList from "../brands/BrandList";
import ProductList from "../products/ProductList";
import Product from "../products/Product";
import ProductDetail from "../products/ProductDetail";
import CategoryList from "../categories/CategoyList";
import Category from "../categories/Category";
import TagLists from "../tags/TagList";
import Tag from "../tags/Tag";
import TypeList from "../types/TypeList";
import Type from "../types/Type";
import NotFound from "./NotFound";
import CheckoutPage from "../cart/Checkout";


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
    <Provider store={store}>
      <Routers />
    </Provider>
  );
});

test("matches snapshot", function () {
  const { asFragment } = render(
    <Provider store={store}>
      <Routers />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('NavBar component renders correctly', () => {
  const { container } = render(
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>
          <NavBar />
        </UserProvider>
      </Provider>
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});

test('Home component renders correctly', () => {
  const { container } = render(
    <BrowserRouter>
      <UserProvider>
        <Home />
      </UserProvider>
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});

test('Brand component renders correctly', () => {
  const { container } = render(
    <BrowserRouter>
      <UserProvider>
        <Brand />
      </UserProvider>
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
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

test('ProductList component renders correctly', () => {
  const { container } = render(
    <BrowserRouter>
      <UserProvider>
        <ProductList />
      </UserProvider>
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});

test('Product component renders correctly', () => {
  const { container } = render(
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>
          <Product />
        </UserProvider>
      </Provider>
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


test('Category component renders correctly', () => {
  const { container } = render(
    <BrowserRouter>
      <UserProvider>
        <Category />
      </UserProvider>
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});

test('ProductDetail component renders correctly', () => {
  const { container } = render(
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>
          <ProductDetail />
        </UserProvider>
      </Provider>
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});

test('Type component renders correctly', () => {
  const { container } = render(
    <BrowserRouter>
      <UserProvider>
        <Type />
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


test('Tag component renders correctly', () => {
  const { container } = render(
    <BrowserRouter>
      <UserProvider>
        <Tag />
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

test('NotFound component renders correctly', () => {
  const { container } = render(
    <BrowserRouter>
      <UserProvider>
        <NotFound />
      </UserProvider>
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});

test('CheckoutPage component renders correctly', () => {
  const { container } = render(
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>
          <CheckoutPage />
        </UserProvider>
      </Provider>
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});

test('Routes to login page', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  expect(getByText("Log In")).toBeInTheDocument();
});
test('Routes to signup page', () => {
  const { getByText } = render(
    <BrowserRouter>
      <SignupForm />
    </BrowserRouter>
  );
  expect(getByText("Sign Up")).toBeInTheDocument();
});
});