import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { Main } from "./styles/global";

import Header from "./components/Header";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Comments from "./pages/Comments";
import UserProfile from "./pages/UserProfile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Route path="/" exact component={Home} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/users" exact component={Users} />
        <Route path="/posts/:id" component={Comments} />
        <Route path="/users/:id" component={UserProfile} />
      </Main>
    </BrowserRouter>
  );
}
