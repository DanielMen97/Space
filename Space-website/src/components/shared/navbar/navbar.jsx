import styles from './navbar.module.scss';
import logo from '../../../assets/shared/logo.svg'
import { NavLink, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.navbar_container}>
      <img src={logo}></img>
      <div className={styles.line}>
      </div>
      <nav className={styles.navbar}>
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


          {/* <NavLink
            to='/'
            className={({ isActive }) => `${isActive ? ` ${styles.LinkIsActive}` : ` ${styles.LinkIsDisable}`}`}>
            <li className={styles.list_item}>
              <span><strong>00</strong> HOME </span>
            </li>
          </NavLink>
          <NavLink to='/destination' className={({ isActive }) => `${isActive ? ` ${styles.LinkIsActive}` : ` ${styles.LinkIsDisable}`}`}><li className={styles.list_item}><span>01</span>DESTINATION</li></NavLink>
          <NavLink to='/crew' className={({ isActive }) => `${isActive ? ` ${styles.LinkIsActive}` : ` ${styles.LinkIsDisable}`}`}><li className={styles.list_item}><span>02</span>CREW</li></NavLink>
          <NavLink to='/technology' className={({ isActive }) => `${isActive ? ` ${styles.LinkIsActive}` : ` ${styles.LinkIsDisable}`}`}><li className={styles.list_item}><span>03</span>TECHNOLOGY</li></NavLink> */}
        </ul>
      </nav>
    </div>
  )
}