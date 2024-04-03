import styles from './navbar.module.scss';
import logo from '../../../assets/shared/logo.svg'
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpenNavbar, setIsOpenNavbar] = useState(false)

  return (
    <div className={styles.navbar_container}>
      <img className={styles.imgLogo} src={logo}></img>
      <div className={styles.line}>
      </div>
      <img className={styles.iconHamburger} onClick={() => setIsOpenNavbar(true)} src='./src/assets/shared/icon-hamburger.svg'>
      </img>
      <nav className={isOpenNavbar ? styles.navbarMobile : styles.navbar}>
        <img className={styles.iconClose} onClick={() => setIsOpenNavbar(false)} src='./src/assets/shared/icon-close.svg'>
        </img>
        <ul className={styles.list_container}>
          <NavLink
            to='/'
            className={pathname === "/" ? styles.LinkIsActive : styles.LinkIsDisable}>
            <li className={styles.list_item}>
              <span><strong>00</strong> HOME </span>
            </li>
          </NavLink>
          <NavLink to='/destination'
            className={pathname === "/destination" ? styles.LinkIsActive : styles.LinkIsDisable}>
            <li className={styles.list_item}>
              <span><strong>01</strong> DESTINATION </span>
            </li>
          </NavLink>
          <NavLink to='/crew'
            className={pathname === "/crew" ? styles.LinkIsActive : styles.LinkIsDisable}>
            <li className={styles.list_item}>
              <span><strong>02</strong> CREW </span>
              </li>
          </NavLink>
          <NavLink to='/technology'
            className={pathname === "/technology" ? styles.LinkIsActive : styles.LinkIsDisable}>
            <li className={styles.list_item}>
              <span><strong>03</strong> TECHNOLOGY </span></li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}