import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg-9.jpg";
import heroBcg2 from "../assets/hero-bcg-10.jpg";
import { FaSearch } from "react-icons/fa";
import Button from "@mui/material/Button";
import { motion, AnimatePresence } from "framer-motion";


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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  };

  const Heading = styled(motion.h1)`
  /* Custom CSS for h1 */
  width: 33%;
  height: 100%;
  font-size: 1%.5;
  text-align: center;
  display: grid;
  place-content: center;
  color: #333;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


    @media (max-width: 992px) {
      width: 100%;
      height: 30%;
      font-size: 1.3rem;
    }
  `;

  const Paragraph = styled(motion.p)`
  /* Custom CSS for p */
  width: 33%;
  height: 100%;
  display: grid;
  place-content: center;
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media (max-width: 992px) {
      width: 100%;
      height: 60%;
    }
  `;

  return (
    <Wrapper>

      <article className='content'>
        <div className="transparent-holder"></div>
        <article className="promo-holder">
          <div className="transparent-holder"></div>

          <div className="dekstop-section-1">
            <AnimatePresence>
              <Heading
                variants={headingVariants}
                initial="hidden"
                animate="visible"
              >
                {carouselTexts[currentIndex].title}
              </Heading>
            </AnimatePresence>

            <img src={heroBcg2} alt='jewelery necklace' className='main-img' onClick={() => openOverlay(heroBcg2)} />

            <AnimatePresence>
            <Paragraph variants={paragraphVariants} initial="hidden" animate="visible">
              {carouselTexts[currentIndex].content}
            </Paragraph>
            </AnimatePresence>

          </div>


          <div className="mobile-section-1">
          <AnimatePresence>
            <Heading
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              {carouselTexts[currentIndex].title}
            </Heading>
            </AnimatePresence>

            {/* <img src={heroBcg2} alt='jewelery necklace' className='main-img-mobile' onClick={() => openOverlay(heroBcg2)} /> */}
            <AnimatePresence>
            <Paragraph variants={paragraphVariants} initial="hidden" animate="visible">
              {carouselTexts[currentIndex].content}
            </Paragraph>
            </AnimatePresence>

          </div>

          {/* <div style={{ width: '100%', display: 'grid', justifyContent: 'center' }}>
            <Link to='/products' className='btn hero-btn'>shop now</Link>
          </div> */}
        </article>
      </article>


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
      {overlay.open &&
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

      {overlay.open && (
        <div className="overlay container" onClick={closeOverlay}>
          <img src={overlay.image} alt="overlay" />
          <Link to={`/products/${id}`} className="link">
            <FaSearch />
          </Link>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
            
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
              background-color: #A67563;
              opacity: 0.1;
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
              }

              .dekstop-section-1{
                display: flex;
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
                width: 33%;
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
                }
                .main-img-mobile{
                  position: absolute;
                }
                .dekstop-section-1{
                  display: none;
                }
              }

            `;

export default Hero;
