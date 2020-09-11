import React from 'react'
import { Container, Content } from './styles'
const Layout: React.FC = props => {
  return (
    <Container>
      <div className="Content">{props.children}</div>
    </Container>
  )
}

export default Layout
