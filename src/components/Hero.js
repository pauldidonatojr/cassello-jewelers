import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg-8.jpg";
import heroBcg2 from "../assets/hero-bcg.jpg";
import { FaSearch } from "react-icons/fa";
import Button from "@mui/material/Button";

import heroBcg3 from "../assets/hero-bcg-3.jpg";
import heroBcg4 from "../assets/hero-bcg-4.jpg";
import heroBcg5 from "../assets/hero-bcg-5.jpg";
import heroBcg6 from "../assets/hero-bcg-6.jpg";
import heroBcg7 from "../assets/hero-bcg-7.jpg";
import heroBcg8 from "../assets/hero-bcg-8.jpg";
import heroBcg9 from "../assets/hero-bcg-9.jpg";
import heroBcg10 from "../assets/hero-bcg-10.jpg";

import image_1 from "../assets/imag-2.jpeg"
import image_2 from "../assets/image-3.jpg"
import image_3 from "../assets/image-4.jpeg"
import image_4 from "../assets/image-5.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


const Hero = () => {
  const carouselTexts = [
    {
      title: "Tailoring Elegance, Just for You",
      content:
        "Welcome to Cassello Jewelers, your premier online destination for exclusive, handcrafted jewelry designs. We specialize in offering an extensive collection of high-quality, luxury pieces ranging from timeless classics to contemporary trends. Our curated selection of ethically-sourced diamonds, precious gemstones, and finely wrought gold and silver pieces ensures that there's something for everyone. ",
      image: image_2,
    },
    {
      title: "Shaping Your Unique Sparkle",
      content:
        "Discover the magic of exquisite jewelry with Cassello Jewelers, your top-tier online store for unique and handcrafted jewelry masterpieces. We take pride in our wide array of top-notch luxury items that blend tradition and modernity. Our carefully chosen collection includes ethically mined diamonds, precious gems, and intricate gold and silver pieces.",
      image: heroBcg4,
    },
    {
      title: "Where Precious Becomes Personal",
      content:
        "Whether you're searching for a stunning engagement ring, an elegant necklace, or personalized jewelry gifts, our expert team is dedicated to helping you discover the perfect piece. With a secure shopping experience, worldwide shipping, and top-notch customer service, Cassello Jewelers is your trusted jewelry partner for every occasion.",
      image: heroBcg5,
    },
    {
      title: "Designing Your Personal Elegance",
      content:
        "From the perfect engagement ring to a memorable custom gift, our dedicated team will assist you in finding the right piece for your special moment. Experience the ease of secure shopping, international shipping, and outstanding customer service with Cassello Jewelers - your reliable partner for all jewelry needs.",
      image: image_3,
    },
    {
      title: "Molding Your Precious Moments",
      content:
        "Seeking the ultimate engagement ring or a distinctive custom gift? Our committed team at Cassello Jewelers is here to help you pinpoint the perfect selection for your unique occasion. Benefit from our user-friendly online shopping platform, international delivery options, and superior customer care. Cassello Jewelers - your dependable source for all your jewelry desires.",
      image: heroBcg8,
    },
    {
      title: "Sculpting Your Jewelry Dreams",
      content:
        "From the dreamiest engagement rings to personalized keepsake gifts, our devoted team at Cassello Jewelers stands ready to guide you towards your ideal piece. Enjoy seamless shopping, worldwide shipping, and unrivaled customer service as you embark on your jewelry journey. Choose Cassello Jewelers – your trusted ally in crafting unforgettable jewelry experiences.",
      image: image_4,
    },
  ];

  return (
    <Wrapper>
      <div className="swiper-container">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 1,
          }}
          spaceBetween={10}
          pagination={{
            clickable: false,
          }}
          modules={[Autoplay, Grid, Pagination]} 
          autoplay={{ delay: 3000 }}
          className="mySwiper"
        >
          {carouselTexts.map((text, index) => (
            <SwiperSlide key={index} className="CustomSlide">
              <img className="swiper-images" src={text.image} />
            </SwiperSlide>
          ))}
        </Swiper>


            


        <p className="overlay-text">
          Welcome to Cassello Jewellers
          </p>
        <p className="overlay-text2">Your premier online destination for exclusive, handcrafted jewelry designs. We specialize in offering an extensive collection of high-quality, luxury pieces ranging from timeless classics to contemporary trends. Our curated selection ensures that there's something for everyone.
        </p>


      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  font-family: "Century Gothic", sans-serif;

  .mySwiper {
    width: 100%;
    height: 60vh;
  }

  .CustomSlide {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet {
    background-color: red; 
    font-size:50px;
  }
  
  .swiper-pagination-bullet-active {
    background-color: darkred; 
    font-size:50px;
  }

  .swiper-container {
    position: relative;
  }
 
  .overlay-text {
    position: absolute;
    top: 20%;
    left: 50%; 
    transform: translate(-50%, -50%);
    font-size: 50px;
    color: #222831;
    background-color: rgba(238, 238, 238, 0.5);
    padding: 10px;
    border-radius: 5px;
    z-index:10;
    font-weight:1000;
  }
  .overlay-text2 {
    position: absolute;
    top: 60%;
    left: 50%;
    width:75%; 
    height:50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-weight:100;
    color: #222831;
    background-color: rgba(238, 238, 238, 0.5);
    padding: 10px;
    border-radius: 5px;
    z-index:10;
    overflow:hidden;
  }

  @media (max-width: 767px) {

    margin-top:80px;

    .overlay-text2{
      
      font-size: 19px;
      width:90%;
      top:60%;
      height:65%;
      font-weight:700;
    }
    .overlay-text{
    
      font-weight:1000;
      font-size: 150%;
      width:95%;
      top:15%;
      text-align:center;
    }
  }
  @media (min-width: 800px) and (max-width: 950px) {
    margin-top:10%;
    .overlay-text2{
      
      font-size: 150%;
      width:85%;
      height:40%;
      top:60%;
      font-weight:700;
    }
    .overlay-text{
      font-size: 150%;
      width:85%;
      top:15%;
      text-align:center;
    }

  }

`;

export default Hero;
