import styles from './navbar.module.css';
import logo from '../../assets/shared/logo.svg'
import { NavLink, useLocation } from 'react-router-dom';

export const Navbar = () => {


  const { pathname } = useLocation();

  const isActive = Location.pathname;

  return (
    <div className={styles.navbar_container}>
      <img src={logo}></img>
      <div className={styles.line}>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.list_container}>
          <NavLink to='/' className={({ isActive }) => `${styles.Links}${isActive ? ` ${styles.IsActive}` : ``}`}><li className={styles.list_item}><span>00</span>HOME</li></NavLink>
          <NavLink to='/destination' className={({ isActive }) => `${styles.Links}${isActive ? ` ${styles.IsActive}` : ``}`}><li className={styles.list_item}><span>01</span>DESTINATION</li></NavLink>
          <NavLink to='/crew' className={({ isActive }) => `${styles.Links}${isActive ? ` ${styles.IsActive}` : ``}`}><li className={styles.list_item}><span>02</span>CREW</li></NavLink>
          <NavLink to='/technology' className={({ isActive }) => `${styles.Links}${isActive ? ` ${styles.IsActive}` : ``}`}><li className={styles.list_item}><span>03</span>TECHNOLOGY</li></NavLink>    
        </ul>

      </nav>

    </div>


  )
}