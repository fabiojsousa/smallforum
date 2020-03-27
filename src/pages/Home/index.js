import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Link to="/posts">
        <div>POSTS</div>
      </Link>
      <Link to="/users">
        <div>USERS</div>
      </Link>
    </Container>
  );
}
