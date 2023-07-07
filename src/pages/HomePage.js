import React, { useState, useEffect } from 'react';import { FeaturedProducts, Hero, Services, Contact } from '../components'
import citrine from '../assets/citrine-earring.mov'
import teardrop from '../assets/tear-drop.mov'
import xearring from '../assets/x-earrings.mov'
import styled from 'styled-components';
const StyledButton = styled.button`
  background-color: #3f51b5;
  color: #fff;
  padding: 18px 36px;
  border: none;
  cursor: pointer;
  font-size: 40px;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #283593;
  }
`;
const HomePage = () => {


  const videos = [citrine, teardrop, xearring]; // replace with your actual video sources

  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);
  useEffect(() => {
    const handleEnter = (e) => {
      if (e.keyCode === 13) {
        setLoading(false);
      }
    };

    window.addEventListener('keydown', handleEnter);

    return () => window.removeEventListener('keydown', handleEnter);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideo((currentVideo + 1) % videos.length);
    }, 5000); // change videos every 8 seconds

    return () => clearInterval(intervalId); // clean up on component unmount
  }, [currentVideo, videos]);

  const handleButtonClick = () => {
    setLoading(false);
  }
  if (loading) {
    return (
      <div className="loading-screen">
        <h1 style={{color: 'black'}}> Cassello Jewelers</h1>
        <video autoPlay loop muted src={videos[currentVideo]} type="video/mov">
          Your browser does not support the video tag.
        </video>
 <StyledButton onClick={handleButtonClick}>Shop Now</StyledButton>
      </div>
    );
  }



  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
