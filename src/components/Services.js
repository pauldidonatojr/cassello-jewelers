import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
import { motion } from 'framer-motion';
import { useState } from 'react'
const Services = () => {
  const [navbar, setnavbar] = useState(false);
  const [TextDiv, setTextDiv] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 750) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
    if (scrollY > 600) {
      setTextDiv(true);
    } else {
      setTextDiv(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <Wrapper>
      <div className='section-center'>
        <motion.article className='MainText'
          initial={{ opacity: 0, x: -100 }}
          animate={TextDiv ? { opacity: 1, x: 0 } : {}}
          transition={{ type: 'spring', damping: 10, stiffness: 100, }}>
          <p className='Title'>
            Introducing Custom Jewelry Crafted Exclusively for You!
          </p>
          <p className='SubTitle'>
            Unlock the Brilliance of Your Unique Story with Custom Jewelry
          </p>
        </motion.article>
        <div className='services-center'>
          {services.map((service, index) => {
            const { id, icon, title, text } = service

            return (
              <motion.article className='service' key={id}
                initial={{ opacity: 0, y: -20 }}
                animate={navbar ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'spring', delay: index * 0.2, damping: 10, stiffness: 100, }}>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
font-family: 'Century Gothic', sans-serif;
.section-center{
  padding-bottom:15%;
}

 .MainText {}
 .SubTitle{
  font-size:20px;
  font-weight:100;
  color: #222831;
 }
 .icon{
  background-color:#A67563;
  size:100px;
 }
 .Title{
  font-size:50px;
  font-weight:700;
  width:50%;
  letter-spacing: -1px;
  line-height: 1.2;
  color:#222831;
 }



  h3,
  h4 {
    color:  #6bd5e1;
  }
  padding: 5rem 0;

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: #222831;
    /// here
  }
  .services-center {
    margin-top: 2rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: #ffb677;
    background: #424043;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 10px;
    -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    p {
      color: white;
      font-weight:100;
    }
    h4{
      color:white;
      font-weight:700;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background:  #ff8364;
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services
