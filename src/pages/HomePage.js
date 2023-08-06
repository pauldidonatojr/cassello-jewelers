import React, { useState, useEffect, useRef } from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import citrine from '../assets/citrine-earring.mov'
import teardrop from '../assets/tear-drop.mov'
import xearring from '../assets/x-earrings.mov'
import styled from 'styled-components';
import "../Scrollbar.css";
import CaselloImg from '../assets/Cassello.jpeg'

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
`;


const HomePage = () => {
  const videos = [citrine, teardrop, xearring]; // replace with your actual video sources

  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(); // Add this line

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

  // Add this useEffect
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [videos, currentVideo]);

  const handleButtonClick = () => {
    setLoading(false);
  }

  if (loading) {
    return (
      <Wrapper>
        <div className="loading-screen">
          <div className="loading-text"> Cassello Jewelers</div>
          <video ref={videoRef} autoPlay loop muted playsInline src={videos[currentVideo]} type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div className='button-holder'>
            <StyledButton onClick={handleButtonClick}>Start Exploring</StyledButton>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <main style={{ backgroundColor: "#eeeeee" }}>
      <Hero />
      <FeaturedProducts />
      <Services />
      {/* <Contact /> */}
    </main>
  )
}

export default HomePage;

const Wrapper = styled.div`
font-family: cursive;
width: 100%;
height: 100vh;

.loading-text {
  width: 100%;
  height: 200px;
  padding: 2rem;
  color: #D8B08C;
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.button-holder{
  width: 100%;
  display: flex;
  justify-content: center;
}
`;
