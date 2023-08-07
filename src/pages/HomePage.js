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
    setLoader(true);
  }

  if (loader == false) {
    return (
      <Wrapper>
        <div className="loading-screen">
          <VideoContainer>
            {videos.map((video, index) => (
              <Video
                key={index}
                ref={videoRef}
                autoPlay={index === currentVideo}
                loop
                muted
                playsInline
                style={{
                  opacity: index === currentVideo ? 1 : 0,
                  zIndex: index === currentVideo ? 1 : 0,
                }}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            ))}
          </VideoContainer>
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
  color: black;
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