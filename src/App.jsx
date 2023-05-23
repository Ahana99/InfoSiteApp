import React, { useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";

import Users from "./components/User/Users";
import User from "./components/User/User";
import Posts from "./components/User/Posts";
import Albums from "./components/User/Albums";
import Photos from "./components/User/Photos";

import AppContext from "./contexts/AppContext";


const intitialUser = "no_user";

function loggedUserReducer(state, action) {
  switch (action.type) {
    case "USER_LOGIN": {
      return action.name;
    }
    case "GUEST_LOGIN": {
      return action.name;
    }
    case "NO_USER": {
      return action.name;
    }
  }
}


export default function App() {
  const [loggedUser, dispatch] = useReducer(loggedUserReducer, intitialUser);

  const [otherUser, setOtherUser] = useState("User");

  return (
    <div>
      <AppContext.Provider
        value={{ loggedUser, dispatch, otherUser, setOtherUser }}
      >
        {loggedUser === "no_user" ? (
          <Login />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:userId" element={<User />} />
                <Route path="/users/:userId/posts" element={<Posts />} />
                <Route path="/users/:userId/albums" element={<Albums />} />
                <Route path="/albums/:albumId" element={<Photos />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<ContactUs />} />
              </Route>
            </Routes>
          </BrowserRouter>
        )}
      </AppContext.Provider>
    </div>
  );
}
