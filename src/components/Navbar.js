<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React,{useEffect,useState} from 'react'
>>>>>>> be7a6ae982aa4e78e184c3ca90dc2169499c67d7
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

<<<<<<< HEAD
const useColorRotation = (colors, delay) => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [colors, delay]);

  return colors[colorIndex];
};
=======
>>>>>>> be7a6ae982aa4e78e184c3ca90dc2169499c67d7

const Nav = () => {

  const [navbar, setnavbar] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
       setnavbar(true);
    } else {
       setnavbar(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  const { openSidebar } = useProductsContext()
  const { myUser } = useUserContext()

  const colors = ["#6bd5e1", "#ffd98e", "#ffb677", "#ff8364"];
  const colorCassello = useColorRotation(colors, 2000);
  const colorJewelers = useColorRotation(colors.reverse(), 2000);

  const textStylesCassello = { color: colorCassello, transition: "color 1s" };
  const textStylesJewelers = { color: colorJewelers, transition: "color 1s" };

  return (
    <NavContainer   className={navbar ? "MainDivActive" : "MainDiv"} >
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
<<<<<<< HEAD
            {/* <img src={logo} alt='comfy sloth' /> */}
            <h3>
      <span style={textStylesCassello}>Cassello</span>
      <span style={textStylesJewelers}> Jewelers</span>
    </h3>
=======
           <p className='LogoName'>Cassello </p>
>>>>>>> be7a6ae982aa4e78e184c3ca90dc2169499c67d7
          </Link>
          
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>
                  <p className='HeaderText'>{text}</p>
                  
                  </Link>
                  
              </li>
            )
          })}
          {myUser && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`



  .HeaderText{
    font-size:18px;
    font-weight:100;
    color:#2d4059;
  }

  .LogoName{
    width:100%;
    font-size:27px;
    font-weight:100;  
  }

  .nav-center {
    width: 85%;
    margin: 0 auto;;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: #74b49b;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
      width:50%;
      margin-left:10%;

  }
  .cart-btn-wrapper {
    display: none;
  }



  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
       
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
  .nav-center{
    display: flex;
    position:fixed;
    justify-content:space-evenly;
    width:100%;
  }
`

export default Nav
