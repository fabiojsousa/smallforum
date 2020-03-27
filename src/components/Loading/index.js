import React from "react";

import { Container } from "./styles";

import loadingGif from "../../assets/loading.gif";

export default function Loading() {
  return (
    <Container>
      <img alt="Loading" src={loadingGif} />
      <p>Loading data...</p>
    </Container>
  );
}
