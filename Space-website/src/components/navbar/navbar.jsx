import styles from './navbar.module.css';
import logo from '../../assets/shared/logo.svg'

export const Navbar = () => {

  return (
    <div className={styles.navbar_container}>
      <img src={logo}></img>
      <div className={styles.line}>
      </div>
      <nav className={styles.navbar}>
       <ul className={styles.list_container}>
          <li className={styles.list_item}><span>00</span>HOME</li>
          <li className={styles.list_item}><span>01</span>DESTINATION</li>
          <li className={styles.list_item}><span>02</span>CREW</li>
          <li className={styles.list_item}><span>03</span>TECHNOLOGY</li>
       </ul>

      </nav>

    </div>


  )
}