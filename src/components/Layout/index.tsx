import React, { useState } from 'react'
import Head from 'next/head'

import { Container, SideBar, NavBar, Content, Breadcrumb } from './styles'
const Layout: React.FC = props => {
  const [open, setOpen] = useState(false)
  return (
    <Container sidebar={open}>
      <Head>
        <title>Next App - CRUD</title>
      </Head>
      <NavBar open={open} handleOpen={setOpen} />
      <SideBar open={open} handleOpen={setOpen} />
      <Breadcrumb />
      <Content>{props.children}</Content>
    </Container>
  )
}

export default Layout
