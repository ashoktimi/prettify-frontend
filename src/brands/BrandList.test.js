import React from "react";
import { render } from "@testing-library/react";
import BrandList from "./BrandList";
import { UserProvider } from '../testUtils'


test("renders without crashing", function () {
  render(
   <UserProvider>
     <BrandList />
   </UserProvider>    
   );
});

test("matches snapshot", function () {
  const { asFragment } = render(<BrandList />);
  expect(asFragment()).toMatchSnapshot();
});