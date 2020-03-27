import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Link to="/posts">
        POSTS
      </Link>
      <Link to="/users">
        USERS
      </Link>
    </Container>
  );
}
