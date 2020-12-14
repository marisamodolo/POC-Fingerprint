import React from 'react'

import { Container, Text } from './styled'

const Header = ({ children }: {children: string}) => (
  <Container>
    <Text>{children}</Text>
  </Container>
)

export default Header
