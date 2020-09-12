import React, { useState } from 'react'
import { Container, SideBar, NavBar, Content, Breadcrumb } from './styles'
const Layout: React.FC = props => {
  const [open, setOpen] = useState(false)
  return (
    <Container sidebar={open}>
      <NavBar open={open} handleOpen={setOpen} />
      <SideBar open={open} handleOpen={setOpen} />
      <Breadcrumb />
      <Content>{props.children}</Content>
    </Container>
  )
}

export default Layout
