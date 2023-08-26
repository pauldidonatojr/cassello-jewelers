import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AuctionProductList = ({ image, name, price, id }) => {

    const [remainingTime, setRemainingTime] = useState(5025);
    useEffect(() => {
      const intervalId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const formatTime = (timeInSeconds) => {
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = timeInSeconds % 60;
  
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };
  return (
    <Wrapper>
        {/* to={`/products/${id}`}   Add this later to navigate to the Auction Page  */} 
       <Link  className='link'> 
        <div className='container'>
          <img src={image} alt={name} className='image' />
        </div>
        <footer>
          <div className='name-holder'>
            <h5>{name}</h5>
          </div>
          <div className='price-holder'>
            <p> <span style={{color:"white",fontWeight:100}} >Minimun Bid </span>{formatPrice(price)}</p>
           
          </div>
          <CountdownTimer>
                <TimerLabel>Time Remaining:</TimerLabel>
                <TimerValue>{formatTime(remainingTime)}</TimerValue>
              </CountdownTimer>
        </footer>
      </Link>
    </Wrapper>
  )
}
const CountdownTimer = styled.div`
font-family: "Century Gothic", sans-serif;
  display: flex;
  align-items: center;
  justify-content:center;
  margin-bottom: 10px;
`;

const TimerLabel = styled.p`
font-family: "Century Gothic", sans-serif;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
  color: white;
`;

const TimerValue = styled.p`
font-family: "Century Gothic", sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
const Wrapper = styled.article`
height: 500px;
background-color:black;

  &:hover{
    -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    transition: 0.5s ease-in box-shadow;
  }

  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
    
  }
  .image {
    width: 100%;
    height:340px;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
    background-color:none;
  }
  .link {
    /* top: 50%;
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
    } */
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
  }

  .name-holder{
    width: 100%;
    height: 30%;
    display: grid;
    justify-content: center;
  }

  .price-holder{
    width: 100%;
    height: 50px;
    margin-top: 30px;
    display: grid;
    justify-content: center;
  }

  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 100;
    font-size:18px;
    color:white;
  }

  footer p {
    color: var(--clr-primary-5);
    font-weight:bold;
    letter-spacing: var(--spacing);
  }
  @media (max-width: 767px) {
   height:500px;
  }


  @media (min-width: 800px) and (max-width: 950px) {
    height:525px;
  }
`
export default AuctionProductList;
