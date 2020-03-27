import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <span>SMALL</span> <span>FORUM</span>
      </Link>
    </Container>
  );
}
