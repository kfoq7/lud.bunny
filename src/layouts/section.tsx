import React from 'react'
import Head from 'next/head'

interface Props {
  title?: string
  children: React.ReactNode
}

export default function Layout({ title, children }: Props) {
  const t = `lud.bunny - ${title}`

  return (
    <main className="m-auto max-w-screen-xl">
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta property="og:title" content={t} />
          </Head>
        )}
        {children}
      </>
    </main>
  )
}
