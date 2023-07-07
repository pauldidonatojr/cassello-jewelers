import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg-9.jpg'
import heroBcg2 from '../assets/hero-bcg-10.jpg'
import { FaSearch } from 'react-icons/fa'
const Hero = ({ image, name, price, id }) => {

  const [overlay, setOverlay] = useState({ open: false, image: null });

  const openOverlay = (image) => {
      setOverlay({ open: true, image: image });
  };

  const closeOverlay = () => {
      setOverlay({ open: false, image: null });
  };
  const carouselTexts = [
    {
        title: 'Tailoring Elegance, Just for You',
        content: 'Welcome to Cassello Jewelers, your premier online destination for exclusive, handcrafted jewelry designs. We specialize in offering an extensive collection of high-quality, luxury pieces ranging from timeless classics to contemporary trends. Our curated selection of ethically-sourced diamonds, precious gemstones, and finely wrought gold and silver pieces ensures that there\'s something for everyone. ',
    },
    {
      title: 'Shaping Your Unique Sparkle',
      content: 'Discover the magic of exquisite jewelry with Cassello Jewelers, your top-tier online store for unique and handcrafted jewelry masterpieces. We take pride in our wide array of top-notch luxury items that blend tradition and modernity. Our carefully chosen collection includes ethically mined diamonds, precious gems, and intricate gold and silver pieces.'
  },
  {
    title: 'Where Precious Becomes Personal',
    content: 'Whether you\'re searching for a stunning engagement ring, an elegant necklace, or personalized jewelry gifts, our expert team is dedicated to helping you discover the perfect piece. With a secure shopping experience, worldwide shipping, and top-notch customer service, Cassello Jewelers is your trusted jewelry partner for every occasion.',
  },
  {
    title: 'Designing Your Personal Elegance',
    content: ' From the perfect engagement ring to a memorable custom gift, our dedicated team will assist you in finding the right piece for your special moment. Experience the ease of secure shopping, international shipping, and outstanding customer service with Cassello Jewelers - your reliable partner for all jewelry needs.',
  },
  {
    title: 'Molding Your Precious Moments',
    content: 'Seeking the ultimate engagement ring or a distinctive custom gift? Our committed team at Cassello Jewelers is here to help you pinpoint the perfect selection for your unique occasion. Benefit from our user-friendly online shopping platform, international delivery options, and superior customer care. Cassello Jewelers - your dependable source for all your jewelry desires.'
},
{
  title: 'Sculpting Your Jewelry Dreams',
  content: 'From the dreamiest engagement rings to personalized keepsake gifts, our devoted team at Cassello Jewelers stands ready to guide you towards your ideal piece. Enjoy seamless shopping, worldwide shipping, and unrivaled customer service as you embark on your jewelry journey. Choose Cassello Jewelers – your trusted ally in crafting unforgettable jewelry experiences.'
}
    // Add more text objects here to be included in the carousel
];
const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() => {
  const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
  }, 3000);

  return () => clearInterval(timer);
}, [carouselTexts.length]);

  return (
    <Wrapper className='section-center'>
     <article className='content'>
            <h1>{carouselTexts[currentIndex].title}</h1>
            <p>{carouselTexts[currentIndex].content}</p>
            <Link to='/products' className='btn hero-btn'>shop now</Link>
        </article>
      <article className='img-container '>
                <img src={heroBcg2} alt='jewelery necklace' className=' main-img' onClick={() => openOverlay(heroBcg2)} />
                <img src={heroBcg} alt='close up jewelery necklace' className='accent-img' onClick={() => openOverlay(heroBcg)} />

            </article>
            {overlay.open && (
                <div className="overlay container" onClick={closeOverlay}>
                    <img src={overlay.image} alt='overlay' />
                    <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
                </div>
            )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 1;
  }
  .container:hover .link {
    opacity: 1;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
