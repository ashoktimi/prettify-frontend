import React from "react";
import { render } from "@testing-library/react";
import Home from './Home';
import { UserProvider } from '../testUtils'
import { BrowserRouter } from "react-router-dom";


test("renders without crashing", function () {
  render(
   <BrowserRouter>
     <UserProvider>
       <Home />
     </UserProvider>  
   </BrowserRouter>  
   );
});

test("matches snapshot", function () {
  const { asFragment } =
   render(
     <BrowserRouter>
       <UserProvider>
         <Home />
       </UserProvider>  
     </BrowserRouter> 
    );
  expect(asFragment()).toMatchSnapshot();
});