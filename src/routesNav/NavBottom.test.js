import React from "react";
import { render } from "@testing-library/react";
import NavBottom from './NavBottom';
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <NavBottom />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
