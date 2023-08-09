import React, { useState, useEffect, useRef } from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import citrine from '../assets/citrine-earring.mov'
import teardrop from '../assets/tear-drop.mov'
import xearring from '../assets/x-earrings.mov'
import styled from 'styled-components';
import "../Scrollbar.css";
import CaselloImg from '../assets/Cassello.jpeg'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { motion } from 'framer-motion';

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


const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});


const HomePage = () => {
  const videos = [citrine, teardrop, xearring];
  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef();
  const [loader, setLoader] = useRecoilState(textState);


  const [showSplash, setShowSplash] = useState(true);
  const splashDuration = 3000;

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

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, splashDuration);

    return () => clearTimeout(splashTimer);
  }, []);

  const handleButtonClick = () => {
    setLoading(false);
    setLoader(true);
  }

  if (showSplash && loader == false) {
    return (
      <SplashScreen>
        <div className='splashInner'>
          <h1>Cassello </h1>
          <h1 style={{ color: '#A67563' }}>Jewellers</h1>
        </div>
      </SplashScreen>
    );
  }
  else if (loader == false) {
    return (
      <Wrapper>
        <div className="loading-screen">
          <VideoContainer>
            {videos.map((video, index) => (
              <video ref={videoRef} autoPlay loop muted playsInline src={videos[currentVideo]} type="video/mp4">
                Your browser does not support the video tag.
              </video>
            ))}
          </VideoContainer>
          <div className='button-holder'>
            <StyledButton onClick={handleButtonClick}>Start Exploring</StyledButton>
          </div>
        </div>
      </Wrapper>
    );
  }

  else {
    return (
      <main style={{ backgroundColor: "#eeeeee" }}>
        <Hero />
        <FeaturedProducts />
        <Services />
        {/* <Contact /> */}
      </main>
    )
  }
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
  color: black;
  font-size: 30px;
  font-family: 'Century Gothic', sans-serif;
}
.button-holder{
  width: 100%;
  display: flex;
  justify-content: center;
}




`;


const VideoContainer = styled.div`
  position: relative;
  width: 50%;
  height: 60vh;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--clr-primary-5);
  border-radius: 8px;

  @media (max-width: 992px) {
    width: 80%;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s;
`;

const SplashScreen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10000;
  background-color: white;
  display: grid;
  justify-content: center;
  place-content: center;
  font-family: 'Century Gothic', sans-serif;

  .splashInner{
    display:flex;
  }

  @media (max-width: 600px) {
    .splashInner{
      display:flex;
    }
  }
`;