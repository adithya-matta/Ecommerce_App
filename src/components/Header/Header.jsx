import React, {useRef,useEffect} from 'react';
import './header.css'
import userIcon from '../../assets/images/user-icon.png'
import logo from '../../assets/images/eco-logo.png'
import { Container,Row } from 'reactstrap';  // we need to install {npm install reactstrap}
import { NavLink,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {motion} from 'framer-motion'
const Header = () => {
const totalQuantity = useSelector((state) => state.cart.totalQuantity)
const headerRef = useRef(null)
const menuRef = useRef(null)
const navigate = useNavigate()

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }
      else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(() => {
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll',stickyHeaderFunc);
  });

  const navigateToCart = () => {
    navigate('/cart')
  }

  const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  const nav__links =[
    {
      path:'/',
      display:'Home'
    },
    {
      path:'shop',
      display:'Shop'
    },
    {
      path:'cart',
      display:'Cart'
    }
  ]
  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>MegaMart</h1>
                {/* <p>Since 1995</p> */}
              </div>
            </div>

            <div className='navigation' ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                  {
                    nav__links.map((item,index) => (
                      <li className='nav__item' key={index}>
                         <NavLink to={item.path} className={(navClass) => 
                              navClass.isActive ? 'nav__active':''}>{item.display}</NavLink>
                      </li>
                    ))
                  }
              </ul>
            </div>
            <div className='nav__icons'>
              <span className='fav__icon'><i class="ri-heart-line"></i>
                <span className='badge'>1</span>
              </span>
              
              <span className='cart__icon' onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                  <span className='badge'>{totalQuantity}</span>
                </span>
                <span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="" width='70px' /></span>
                <div className="mobile__menu">
                  <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
                </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header