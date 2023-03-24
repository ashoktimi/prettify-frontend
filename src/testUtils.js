import React from "react";
import UserContext from "./auth/userContext";


const demoUser = {
  username: "testuser",
  first_name: "testfirst",
  last_name: "testlast",
  email: "test@test.net",
  photo_url: null,
};

const UserProvider =
    ({ children, currentUser = demoUser, handleToggleOffcanvas = () => false }) => (
    <UserContext.Provider value={{ currentUser, handleToggleOffcanvas }}>
      {children}
    </UserContext.Provider>
);

function setup(){
  window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  });
}

function teardown(){
   window.matchMedia.mockClear();
   delete window.matchMedia;
}

function commonBeforeEach() {
  setup();
}

function commonAfterEach() {
  teardown();
}

export { UserProvider, commonBeforeEach, commonAfterEach };