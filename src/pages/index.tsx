import React from 'react'
import Head from 'next/head'

import { Layout } from '../styles/pages/Main'

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App - CRUD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Main</main>

      <footer>Footer</footer>
    </Layout>
  )
}
export default Home
