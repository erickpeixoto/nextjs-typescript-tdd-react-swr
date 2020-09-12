import React from 'react'
import Head from 'next/head'

import Layout from '@components/Layout'

const Main: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App - CRUD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  )
}
export default Main
