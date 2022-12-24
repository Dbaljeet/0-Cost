import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper'
import { useEffect, useState } from 'react'

export const Carrousel = () => {
  const [size, setSize] = useState(950)

  const windowSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', windowSize)
    return () => window.removeEventListener('resize', windowSize)
  }, [])

  useEffect(() => {
    setSize(window.innerWidth)
  }, [])

  return (
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
      className="mySwiper"
    >
      <SwiperSlide>
        {/*display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; */}
        <img
          className="m-auto"
          src={
            size < 950
              ? 'https://images.ctfassets.net/ca03ioli1ast/5GSEBalBmWo9hxn8ElaK4S/cf616456d6e81e445af98214c2c164a8/CV-BH-Navidad-mobile.jpg'
              : 'https://images.ctfassets.net/ca03ioli1ast/48LugAlaD2iysiNVq4evF6/a342ea4c9f0907f87675ad40ab2c5b6a/CV-BH-Navidad.jpg'
          }
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="m-auto"
          src={
            size < 950
              ? 'https://images.ctfassets.net/ca03ioli1ast/5GSEBalBmWo9hxn8ElaK4S/cf616456d6e81e445af98214c2c164a8/CV-BH-Navidad-mobile.jpg'
              : 'https://images.ctfassets.net/ca03ioli1ast/48LugAlaD2iysiNVq4evF6/a342ea4c9f0907f87675ad40ab2c5b6a/CV-BH-Navidad.jpg'
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="m-auto"
          src={
            size < 950
              ? 'https://images.ctfassets.net/ca03ioli1ast/5GSEBalBmWo9hxn8ElaK4S/cf616456d6e81e445af98214c2c164a8/CV-BH-Navidad-mobile.jpg'
              : 'https://images.ctfassets.net/ca03ioli1ast/48LugAlaD2iysiNVq4evF6/a342ea4c9f0907f87675ad40ab2c5b6a/CV-BH-Navidad.jpg'
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="m-auto"
          src={
            size < 950
              ? 'https://images.ctfassets.net/ca03ioli1ast/5GSEBalBmWo9hxn8ElaK4S/cf616456d6e81e445af98214c2c164a8/CV-BH-Navidad-mobile.jpg'
              : 'https://images.ctfassets.net/ca03ioli1ast/48LugAlaD2iysiNVq4evF6/a342ea4c9f0907f87675ad40ab2c5b6a/CV-BH-Navidad.jpg'
          }
        />
      </SwiperSlide>
    </Swiper>
  )
}
