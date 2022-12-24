import Head from 'next/head'
import { Navbar } from './ui'
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Farmacia costo 0</title>
      </Head>
      <Navbar />
      <div className="flex items-center flex-col gap-20 py-12">{children}</div>
    </>
  )
}
