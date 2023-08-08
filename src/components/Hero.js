import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg-8.jpg";
import heroBcg2 from "../assets/hero-bcg.jpg";
import heroBcg5 from "../assets/hero-bcg-5.jpg";
import { FaSearch } from "react-icons/fa";
import Button from "@mui/material/Button";
import { motion, AnimatePresence } from "framer-motion";
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';
import FormControlLabel from '@mui/material/FormControlLabel';


const Hero = ({ image, name, price, id }) => {
  const [overlay, setOverlay] = useState({ open: false, image: null });

  const openOverlay = (image) => {
    setOverlay({ open: true, image: image });
  };

  const closeOverlay = () => {
    setOverlay({ open: false, image: null });
  };

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const carouselTexts = [
    {
      title: "Tailoring Elegance, Just for You",
      content:
        "Welcome to Cassello Jewelers, your premier online destination for exclusive, handcrafted jewelry designs. We specialize in offering an extensive collection of high-quality, luxury pieces ranging from timeless classics to contemporary trends. Our curated selection of ethically-sourced diamonds, precious gemstones, and finely wrought gold and silver pieces ensures that there's something for everyone. ",
    },
    {
      title: "Shaping Your Unique Sparkle",
      content:
        "Discover the magic of exquisite jewelry with Cassello Jewelers, your top-tier online store for unique and handcrafted jewelry masterpieces. We take pride in our wide array of top-notch luxury items that blend tradition and modernity. Our carefully chosen collection includes ethically mined diamonds, precious gems, and intricate gold and silver pieces.",
    },
    {
      title: "Where Precious Becomes Personal",
      content:
        "Whether you're searching for a stunning engagement ring, an elegant necklace, or personalized jewelry gifts, our expert team is dedicated to helping you discover the perfect piece. With a secure shopping experience, worldwide shipping, and top-notch customer service, Cassello Jewelers is your trusted jewelry partner for every occasion.",
    },
    {
      title: "Designing Your Personal Elegance",
      content:
        " From the perfect engagement ring to a memorable custom gift, our dedicated team will assist you in finding the right piece for your special moment. Experience the ease of secure shopping, international shipping, and outstanding customer service with Cassello Jewelers - your reliable partner for all jewelry needs.",
    },
    {
      title: "Molding Your Precious Moments",
      content:
        "Seeking the ultimate engagement ring or a distinctive custom gift? Our committed team at Cassello Jewelers is here to help you pinpoint the perfect selection for your unique occasion. Benefit from our user-friendly online shopping platform, international delivery options, and superior customer care. Cassello Jewelers - your dependable source for all your jewelry desires.",
    },
    {
      title: "Sculpting Your Jewelry Dreams",
      content:
        "From the dreamiest engagement rings to personalized keepsake gifts, our devoted team at Cassello Jewelers stands ready to guide you towards your ideal piece. Enjoy seamless shopping, worldwide shipping, and unrivaled customer service as you embark on your jewelry journey. Choose Cassello Jewelers – your trusted ally in crafting unforgettable jewelry experiences.",
    },
    // Add more text objects here to be included in the carousel
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [carouselTexts.length]);


  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.8 }, // Initial scale set to 0.8 for zoom effect
    visible: {
      opacity: 1,
      y: 0,
      scale: 1, // Normal scale of 1 for visible state
      transition: {
        duration: 1,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 }, // Initial scale set to 0.8 for zoom effect
    visible: {
      opacity: 1,
      y: 0,
      scale: 1, // Normal scale of 1 for visible state
      transition: {
        duration: 1,
      },
    },
  };

  const advertVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.8 }, // Initial scale set to 0.8 for zoom effect
    visible: {
      opacity: 1,
      y: 0,
      scale: 1, // Normal scale of 1 for visible state
      transition: {
        duration: 1,
      },
    },
  };

  const Heading = styled.h1`
  /* Custom CSS for h1 */
  width: 100%;
  height: 20%;
  font-size: 1%.5;
  text-align: center;
  display: grid;
  place-content: center;
  color: #A67563;
  z-index: 1;
  font-family: 'Century Gothic', sans-serif;


    @media (max-width: 992px) {
      width: 100%;
      height: 30%;
      font-size: 1.8rem;
    }
  `;

  const Paragraph = styled.p`
   width: 100%;
    height: 20%;
    font-size: 1%.5;
    text-align: center;
    display: grid;
    place-content: center;
    color: #A67563;
    z-index: 1;
    font-family: 'Century Gothic', sans-serif;


      @media (max-width: 992px) {
        width: 100%;
        height: 80%;
        font-size: 1.8rem;
      }
  `;


  const Advert1 = styled.h1`
  /* Custom CSS for h1 */
  width: 50%;
  height: 100%;
  font-size: 1%.5;
  text-align: center;
  display: grid;
  place-content: center;
  color: #A67563;
  padding: 1rem;
  z-index: 1;
  font-family: 'Century Gothic', sans-serif;

    @media (max-width: 992px) {
      width: 100%;
      height: 30%;
      font-size: 1.8rem;
    }
  `;

  const Advert2 = styled.h1`
   /* Custom CSS for h1 */
   width: 30%;
   height: 100%;
  font-size: 1%.5;
  text-align: center;
  display: grid;
  place-content: center;
  color: #A67563;
  padding: 1rem;
  z-index: 1;
  font-family: 'Century Gothic', sans-serif;

    @media (max-width: 992px) {
      width: 100%;
      height: 30%;
      font-size: 1.8rem;
    }
`;

  const StyledButton = styled.div`
  color: black;
  padding: 5px 15px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  border-radius: 10px;
  transition: color 0.3s ease, border-color 0.3s ease; /* Add color and border-color to the transition property */
  font-family: "Gill Sans", sans-serif;
  position: relative;
  font-style: italic;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px; /* Adjust the thickness of the underline */
    background-color: #D8B08C; /* Color of the underline */
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #D8B08C;
    &::after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }

  @media (max-width: 992px) {
    color: #D8B08C;
  }
`;

  return (
    <Wrapper>

      <article className='content'>
        <div className="transparent-holder"></div>
        <article className="promo-holder">
          <div className="transparent-holder"></div>

          <div className="dekstop-section-1">


            <Advert1
              variants={advertVariant}
              initial="hidden"
              animate="visible"
            >
              Jewelry that reflects your style...
            </Advert1>

            <img src={heroBcg2} alt='jewelery necklace' className='main-img' onClick={() => openOverlay(heroBcg2)} />




          </div>


          <div className="mobile-section-1">

            <img className="mobile-img" src={heroBcg} />
            <Advert1
              variants={advertVariant}
              initial="hidden"
              animate="visible"
            >
              Jewelry that reflects your style...
            </Advert1>

          </div>


        </article>
      </article>


      <div className="ExploreHolder">
        <div className="ExploreContent">
          <h1>The Cassello's Collection</h1>
          <p>Each store is staffed with some of the industry's best jewelers, watchmakers, watch repair professionals
            and smartphone technicians who provide superior quality services.</p>

          <div className='button-holder'>
            <Link to='/products'>
              <StyledButton>View Our Collection</StyledButton>
            </Link>
          </div>
        </div>
      </div>


      <div className="Dynamic-Text">
        <div className="Dynamic-Text-holder">
          <Heading
            key={`heading-${currentIndex}`}
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            {carouselTexts[currentIndex].title}
          </Heading>

          <Paragraph
            key={`paragraph-${currentIndex}`}
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {carouselTexts[currentIndex].content}
          </Paragraph>
        </div>
      </div>


      {/* <article className='content'>
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          {carouselTexts[currentIndex].title}
        </motion.h1>
        <motion.p variants={paragraphVariants} initial="hidden" animate="visible">
          {carouselTexts[currentIndex].content}
        </motion.p>
        <div style={{ width: '100%', display: 'grid', justifyContent: 'center' }}>
          <Link to='/products' className='btn hero-btn'>shop now</Link>
        </div>
      </article>

      <article className='img-container '>
        <img src={heroBcg2} alt='jewelery necklace' className=' main-img' onClick={() => openOverlay(heroBcg2)} />
        <img src={heroBcg} alt='close up jewelery necklace' className='accent-img' onClick={() => openOverlay(heroBcg)} />
      </article> */}
      {
        overlay.open &&
        <div className="overlay container" onClick={closeOverlay}>
          <img src={overlay.image} alt='overlay' />
          <Link to={`/products/${id}`} className='link'>
            <FaSearch />
            <Wrapper className="">
              <div className="LightEffect"></div>
              <article className="content" style={{ marginTop: "20%" }}>
                <h1>{carouselTexts[currentIndex].title}</h1>
                <p>{carouselTexts[currentIndex].content}</p>
                <Link to="/products">
                  <Button variant="contained" className="hero-btn">
                    Shop Now
                  </Button>
                </Link>
              </article>
              <article className="img-container " style={{ marginTop: "20%" }}>
                <img
                  src={heroBcg2}
                  alt="jewelery necklace"
                  className=" main-img"
                  onClick={() => openOverlay(heroBcg2)}
                />
                <img
                  src={heroBcg}
                  alt="close up jewelery necklace"
                  className="accent-img"
                  onClick={() => openOverlay(heroBcg)}
                />
              </article>
            </Wrapper>
          </Link>
        </div>
      }

      {
        overlay.open && (
          <div className="overlay container" onClick={closeOverlay}>
            <img src={overlay.image} alt="overlay" />
            <Link to={`/products/${id}`} className="link">
              <FaSearch />
            </Link>
          </div>
        )
      }
    </Wrapper >
  );
}

const Wrapper = styled.section`
            font-family: 'Century Gothic', sans-serif;
            .promo-holder{
                width: 100%;
                height: 550px;
                display: flex;
                border-radius: 6px;
              }

            .transparent-holder{
              width: 100%;
              height: 550px;
              position: absolute;
              background-color: black;
              /* opacity: 0.8; */
              border-radius: 6px;
            }

            .img-container {
              display: none;
            }

            .content {
              padding-top: 7%;
              }
            .LightEffect {
              border-radius: 150px 0 0 150px; /* The first two values (150px 150px) define the top-left and top-right radii, while the last two (0 0) define the bottom-left and bottom-right radii, making them 0 to create a straight edge */
              opacity: 0.800000011920929;
              background: #A67563;
              filter: blur(150px);
              width: 150px;
              z-index: 1;
              height: 350px;
              position: absolute;
              left: 0px;
              top: 60%;
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

              .mobile-section-1{
                display: none;
                width: 100%;
              }

              .dekstop-section-1{
                display: flex;
              }

              .ExploreHolder{
                margin-top: 100px;
                width: 100%;
                height: 300px;
                justify-content: center;
                display: grid;
              }

              .Dynamic-Text{
                margin-top: 100px;
                width: 100%;
                height: 500px;
                justify-content: center;
                display: grid;
              }

              .Dynamic-Text-holder{
                width: 100%;
                height: 500px;
                justify-content: center;
                display: grid;
                vertical-align: middle;
                text-align: center;
                background-color: #F2F2F2;
                padding: 2rem;
                transition: height 0.3s ease;
                border-radius: 10px;
                -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
                -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
                box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
              }

              .main-img-2 {
                width: 100%;
                height: 500px;
                position: relative;
                border-radius: var(--radius);
                display: block;
                object-fit: cover;
                border-radius: 6px;
              }

              .ExploreContent{
                width: 100%;
                height: 100%;
                text-align: center;
                /* font-family: 'Century Gothic', sans-serif; */
              }

              .button-holder{
                width: 100%;
                display: flex;
                justify-content: center;
              }


              
              @media (min-width: 992px) {
                height: calc(100vh-5rem);
                grid-template-columns: 1fr 1fr;
                gap: 8rem;
                h1 {
                  margin-bottom: 2rem;
                }
                p {
                  font-size: 1.25rem;
                }


              .hero-btn {
                animation: moveUpDown 2s linear infinite;
                padding: 0.75rem 1.5rem;
                font-size: 1rem;
                height: 60px;
                width: 150px;
                display: flex;
                justify-content: center;
                align-items: center;
                align-content: center;
                font-weight: 700;
                background-color: #A67563;
              }
              .img-container {
                display: block;
                position: relative;
              }
              .main-img {
                width: 50%;
                height: 550px;
                position: relative;
                border-radius: var(--radius);
                display: block;
                object-fit: cover;
                border-radius: 6px;
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
                content: "";
                position: absolute;
                width: 10%;
                height: 80%;
                background: #ffb677;
                bottom: 0%;
                left: -8%;
                border-radius: var(--radius);
                }
              }

              @media (max-width: 992px) {
                padding-top: 20%;
                
                .mobile-section-1{
                  display: unset;
                  width: 100%;
                  height: 100%;
                  background-color: black;
                  border-radius: 6px;
                }
                .mobile-img{
                  width: 100%;
                  height: 70%;
                  object-fit: cover;
                  z-index: -1;
                  border-radius: 6px;
                }
                .main-img-mobile{
                  position: absolute;
                }
                .dekstop-section-1{
                  display: none;
                }

                .transparent-holder{
                  display: none;
                }
                .promo-holder{
                  width: 100%;
                  height: 500px;
                  display: flex;
                  border-radius: 6px;
                }
                .Dynamic-Text{
                  padding: 0.7rem;
                }
              }

            `;

export default Hero;
