import { GetStaticProps } from 'next'
import { FC } from 'react'
import { Layout } from '../components'
import { IProduct } from '../interfaces'

interface Props {
  products: IProduct[]
}

const Home: FC<Props> = ({ products }) => {
  return <>{JSON.stringify(products)}</>
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
  }
}
export default Home
