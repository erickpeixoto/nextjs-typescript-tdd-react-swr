import React from 'react'
import SideBar from '@components/SideBar'
import { Container, Content } from './styles'
const Layout: React.FC = props => {
  return (
    <Container>
      <SideBar />
      <Content>{props.children}</Content>
    </Container>
  )
}

export default Layout
