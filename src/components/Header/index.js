import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <strong>SMALL FORUM</strong>
      </Link>
    </Container>
  );
}
