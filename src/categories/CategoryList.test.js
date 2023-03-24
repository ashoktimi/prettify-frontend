import React from "react";
import { render } from "@testing-library/react";
import CategoryList from './CategoyList';
import { UserProvider } from '../testUtils'


test("renders without crashing", function () {
  render(
   <UserProvider>
     <CategoryList />
   </UserProvider>    
   );
});

test("matches snapshot", function () {
  const { asFragment } = render(<CategoryList />);
  expect(asFragment()).toMatchSnapshot();
});




