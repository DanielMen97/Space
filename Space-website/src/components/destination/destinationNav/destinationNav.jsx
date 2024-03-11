import { useState } from "react";
import data from '../../../data.json';
import styles from './styles.module.scss';

export const DestinationNav = (props) => {

  const [isActive, setIsActive] = useState({ name: "Moon"})
  const handleIsSelect = (element) => {
    setIsActive(element)
    props.select(element)
  }
  
  return(
    <nav className={styles.navbar}>
    <ul className={styles.listContainer}>
      {
        data.destinations.map((element, index) => {
          return (
            <li 
              className={(element.name === isActive.name) ? styles.listItemActive : styles.listItem} 
              onClick={() => handleIsSelect(element)} 
              key={index}>
              {element.name}
            </li>
          )
        }
        )
      }
    </ul>
  </nav>
  )
 
}