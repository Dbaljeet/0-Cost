import Head from 'next/head'
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>LAy</title>
      </Head>
      {children}
    </>
  )
}
