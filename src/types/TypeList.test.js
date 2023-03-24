import React from "react";
import { render } from "@testing-library/react";
import { UserProvider } from '../testUtils'
import { MemoryRouter } from "react-router-dom";
import TypeList from './TypeList';
import LoadingSpinner from "../helpers/LoadingSpinner";


test("renders without crashing", function () {
  render(
   <UserProvider>
     <TypeList />
   </UserProvider>    
   );
});

test("matches snapshot", function () {
  const { asFragment } = render(<TypeList />);
  expect(asFragment()).toMatchSnapshot();
});

test("LoadingSpinner component renders correctly ", function () {
  render(
    <MemoryRouter>
       <LoadingSpinner />
    </MemoryRouter>   
   );
});