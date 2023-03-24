import React from "react";
import { render } from "@testing-library/react";
import ProductRating from "./ProductRating";
import { MemoryRouter } from "react-router-dom";


test("renders without crashing", function () {
  render(
    <MemoryRouter>
      <ProductRating />
    </MemoryRouter>   
   );
});

test("matches snapshot", function () {
  const { asFragment } = render(<ProductRating />);
  expect(asFragment()).toMatchSnapshot();
});


