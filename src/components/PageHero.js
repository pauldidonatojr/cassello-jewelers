import React, { useState, useEffect, useRef } from 'react';

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import citrine from '../assets/citrine-earring.mov'
import teardrop from '../assets/tear-drop.mov'
import xearring from '../assets/x-earrings.mov'
const PageHero = ({ title, product }) => {
  const videos = [citrine, teardrop, xearring]; // replace with your actual video sources
  const videoRef = useRef(); // Add this line
  const [currentVideo, setCurrentVideo] = useState(0);
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
  return (
    <Wrapper>
      <div className='section-center' style={{display: 'grid'}}>
        <h1>
          <Link to='/'>Home </Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h1>
        <div style={{ display: 'flex'}}>
        <video style={{height: '30vh', width: '100%', display: 'grid', justifyContent: 'center'}}ref={videoRef} autoPlay loop muted playsInline src={videos[currentVideo - 1]} type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <video style={{height: '30vh', width: '100%', display: 'grid', justifyContent: 'center'}}ref={videoRef} autoPlay loop muted playsInline src={videos[currentVideo + 2]} type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <video style={{height: '30vh', width: '100%', display: 'grid', justifyContent: 'center'}}ref={videoRef} autoPlay loop muted playsInline src={videos[currentVideo]} type="video/mp4">
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
<<<<<<< HEAD
  background:  #ff8364;
=======
  background: var(--clr-primary-10);
  
>>>>>>> be7a6ae982aa4e78e184c3ca90dc2169499c67d7
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
