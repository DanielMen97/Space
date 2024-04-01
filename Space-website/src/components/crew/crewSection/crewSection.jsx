import styles from './styles.module.scss';
import {React, useState} from 'react';
import { CrewNav } from '../crewNav/crewNav';

export const CrewSection = (props) => {

  const [isSelect, setIsSelect] = useState({
    "name": "Douglas Hurley",
    "images": {
      "png": "./assets/crew/image-douglas-hurley.png",
      "webp": "./assets/crew/image-douglas-hurley.webp"
    },
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  });
  
  const infoSelect = (itemselect) => {
    setIsSelect(itemselect)
    props.select(itemselect.images) 
  }

  return (
    <section className={styles.sectionContainer}>
      <article className={styles.textContainer}>
        <p className={styles.role}>{isSelect.role}</p>
        <p className={styles.name}>{isSelect.name}</p>
        <p className={styles.bio}>{isSelect.bio}</p>
      </article>
      <div className={styles.navbarContainer}>
        <CrewNav select={infoSelect}/>
      </div>
    </section>
    
  )
}

