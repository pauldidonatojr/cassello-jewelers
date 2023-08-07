import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import citrine from '../assets/citrine-earring.mov';
import teardrop from '../assets/tear-drop.mov';
import xearring from '../assets/x-earrings.mov';

const videos = [citrine, teardrop, xearring];

const PageHero = ({ title, product }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef([null, null, null]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideo((currentVideo + 1) % videos.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentVideo]);

  useEffect(() => {
    const prevVideo = (currentVideo - 1 + videos.length) % videos.length;
    const nextVideo = (currentVideo + 2) % videos.length;

    // Pause the previous video
    if (videoRefs.current[prevVideo]) {
      videoRefs.current[prevVideo].pause();
    }

    // Play the next video
    if (videoRefs.current[nextVideo]) {
      videoRefs.current[nextVideo].play();
    }
  }, [currentVideo]);

  return (
    <Wrapper>
      <div className='section-center'>
        <VideosContainer>
          {videos.map((video, index) => (
            <Video
              key={index}
              ref={(el) => (videoRefs.current[index] = el)}
              autoPlay={index === currentVideo || index === (currentVideo + 1) % videos.length}
              loop
              muted
              playsInline
            >
              <source src={video} type='video/mp4' />
              Your browser does not support the video tag.
            </Video>
          ))}
        </VideosContainer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;

  .section-center {
    padding-top: 10%;
  }

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

const VideosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--clr-primary-5);
  border-radius: 8px;
`;

const Video = styled.video`
  flex: 1;
  height: 100%;
  object-fit: cover;
`;

export default PageHero;
