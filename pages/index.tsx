import { GetStaticProps } from 'next'
import { FC, useEffect } from 'react'
import { Carrousel, Layout, Modal, Product } from '../components'
import { IProduct } from '../interfaces'

interface Props {
  products: IProduct[]
}

const Home: FC<Props> = ({ products }) => {
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  return (
    <>
      <Layout>
        {/**margin-left: auto;
  margin-right: auto; */}
        <div className="w-full">
          <Carrousel />
        </div>

        <div className="m-auto grid grid-cols-content grid-flow-row w-4/5 gap-8">
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch('http://localhost:3000/api/products', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const products = await data.json()
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24,
  }
}

export default Home
