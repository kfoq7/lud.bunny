import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/navbar'

interface Props {
  children: React.ReactNode
}

export default function Main({ children }: Props) {
  return (
    <>
      <Head>
        <title>lud.bunny - Homepage</title>
        <meta name="title" content="lud.bunny" />
      </Head>

      <Navbar />

      <div>{children}</div>
    </>
  )
}
