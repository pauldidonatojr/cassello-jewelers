import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()
  
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2 className='TitleText'>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {/* {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />
        })} */}
       <>
       <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
          
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {featured.slice(0,10).map((product, index) => (
          <SwiperSlide key={index}>
            <Product key={product.id} {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>

      </div>
    

<Link to='/products'>
      <p className='MoreTitle'>More Products ...</p>

</Link>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: '#eeeeee';
  font-family: 'Century Gothic', sans-serif;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .mySwiper .swiper-pagination-bullet {
    background-color: rgba(255, 87, 34, 0.5); /* Your desired color with opacity */
  }
  .MoreTitle{
    text-align:center;
    font-size:18px;
    color:#222831;
  }
  .TitleText{
    color:white;
    
  z-index: 1;
  }
  .btn {
    display: block;
    width: 250px;
    margin: 0 auto;
    text-align: center;
    background-color: #F2BA52;
    color:black;
    font-size:17px;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
