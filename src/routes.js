import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { Main } from "./styles/global";

import Header from "./components/Header";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";
import UserProfile from "./pages/UserProfile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Route path="/" exact component={Home} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/comments" exact component={Comments} />
        <Route path="/user_profile" exact component={UserProfile} />
      </Main>
    </BrowserRouter>
  );
}
