import { GetStaticProps } from 'next'
import { FC, useEffect } from 'react'
import { Layout } from '../components'
import { IProduct } from '../interfaces'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper'

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
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          keyboard={true}
          modules={[Pagination, Navigation, Keyboard, Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide>
            {/*display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; */}
            <img src='https://cdn-ahumada.azureedge.net/catalog/product/cache/a77266c1abf4147499139dcd165bfd03/6/3/637335fb0b218e59a06c608bdc5778806e9b631bfe7123e47b1cdc8aedcf64f8.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://cdn-ahumada.azureedge.net/catalog/product/cache/a77266c1abf4147499139dcd165bfd03/a/2/a25bcd61afdb7393012b060c572b2c5cc73bfc8948b28984f8fd1f0ff2feefc0.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://cdn-ahumada.azureedge.net/catalog/product/cache/a77266c1abf4147499139dcd165bfd03/7/0/7036d1882361ccd3e726b960ca7e7c7a682881176c01bd89b5d93cc838538b81.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://cdn-ahumada.azureedge.net/catalog/product/cache/a77266c1abf4147499139dcd165bfd03/3/5/35f69e04ec3af160ec071b41d9b9a1dca4c06da61bb733b5798cfde401a366a5.jpg' />
          </SwiperSlide>
        </Swiper>

        {products.map((product) => (
          <div key={product._id}>
            <h2>{product.title}</h2>
            {/*<img src={product.image} alt={product.title} />*/}
          </div>
        ))}
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
