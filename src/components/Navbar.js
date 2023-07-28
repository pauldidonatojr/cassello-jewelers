import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'


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
  return (
    <NavContainer   className={navbar ? "MainDivActive" : "MainDiv"} >
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
           <p className='LogoName'>Cassello </p>
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
    color: var(--clr-primary-5);
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
