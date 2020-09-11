import React from 'react'
// import SideBar from '@components/SideBar'
import { Container, SideBar, NavBar, Content } from './styles'
const Layout: React.FC = props => {
  return (
    <Container>
      <NavBar>NB</NavBar>
      <SideBar>SB</SideBar>
      <Content>{props.children}</Content>
    </Container>
  )
}

export default Layout
