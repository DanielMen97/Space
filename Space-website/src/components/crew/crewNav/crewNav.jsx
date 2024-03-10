import {React, useState} from 'react';
import data from '../../../data.json';
import styles from './styles.module.scss';


export const CrewNav = (props) => {

  const [isActive, setIsActive] = useState({name:"Douglas Hurley"});
  const handleIsSelect = (element) => {
    setIsActive(element)
    props.select(element)
  }
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.listContainer}>
        {data.crew.map((element, index) => {
          return(
            <li key={index} className={styles.listItem}>
              <button 
                className={(isActive.name === element.name) ? styles.buttonNavActive : styles.buttonNav}
                onClick={() =>(handleIsSelect(element))}>   
              </button>
            </li>
          )
        })}
      </ul>  
    </nav>
  )
}

