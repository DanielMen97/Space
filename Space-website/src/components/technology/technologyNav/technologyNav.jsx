import {React, useState } from 'react';
import data from '../../../data.json';
import styles from './styles.module.scss';

export const TechnologyNav = (props) => {

  const [isActive, setIsActive] = useState({});

  const handleSelect = (element) => {
    setIsActive(element)
    props.select(element)
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.listContainer}>   
        {data.technology.map((element, index) => {        
          return(
            <li 
              className={(element.name === isActive.name) ? styles.listItemActive : styles.listItem}
              key={index}
              onClick={() => handleSelect(element)}>
                {data.technology.indexOf(element) + 1}
            </li>
          )
        })}
      </ul>     
    </nav>
  )
}
