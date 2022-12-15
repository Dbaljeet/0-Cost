import Head from 'next/head'
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Farmacia costo 0</title>
      </Head>
      {children}
    </>
  )
}
