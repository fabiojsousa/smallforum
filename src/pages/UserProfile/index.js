import React from 'react';

import { Container } from './styles';

export default function UserProfile({match}) {
  console.log(match)
  return (
    <Container>
      <div>UserProfile page</div>
    </Container>
  );
}
