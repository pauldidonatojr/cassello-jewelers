import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartButton = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items, clearCart } = useCartContext()
  const { loginWithRedirect, myUser, logout } = useUserContext()
  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        <span className='cart-container'>
          <p className='FunctionText'><ShoppingCartIcon/></p>

          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => {
            // Existing code
          }}
        >
          Logout <LogoutIcon style={{ verticalAlign: 'middle' }} />
        </button>
      ) : (
        <div type='button' className='auth-btn' onClick={loginWithRedirect}>
          <p className='FunctionText'>
            Login <LoginIcon style={{ verticalAlign: 'middle' }} />
          </p>
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 150px;
  margin-right: 20px;

  .FunctionText {
    font-weight: 100;
    font-size: 15px;
    &:hover {
      color: #d8b08c;
    }
    &::after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: #ffb677;
    right: -20px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: black;
    padding: 10px;
  }
  .auth-btn {
    /* Updated styles for proper alignment */
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-color: transparent;
    font-size: 15px;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
    }
  }
`;

export default CartButton
