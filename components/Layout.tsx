import Head from 'next/head'
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Farmacia costo 0</title>
      </Head>
      <div className="flex items-center flex-col gap-20 py-24">{children}</div>
    </>
  )
}
