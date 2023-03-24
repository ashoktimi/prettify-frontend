import React from "react";
import { render } from "@testing-library/react";
import TagList from "./TagList";
import { UserProvider } from '../testUtils'


test("renders without crashing", function () {
  render(
   <UserProvider>
     <TagList />
   </UserProvider>    
   );
});

test("matches snapshot", function () {
  const { asFragment } = render(<TagList />);
  expect(asFragment()).toMatchSnapshot();
});
