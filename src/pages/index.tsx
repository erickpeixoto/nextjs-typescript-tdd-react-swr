import React from 'react'
import Head from 'next/head'
import DefaultPage from './user'

const Main: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App - CRUD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultPage />
    </>
  )
}
export default Main
