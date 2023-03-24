import React from "react";
import { render } from "@testing-library/react";
import NotFound from './NotFound';
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
