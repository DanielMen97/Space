import styles from './styles.module.scss';
import {React, useState } from 'react';
import { CrewSection } from '../crewSection/crewSection';
import { CrewImage } from '../crewImage/crewImage';


export const CrewBody = () => {

  const [isImageSelect, setIsImagenSelect] = useState({
    "png": "./src/assets/crew/image-douglas-hurley.png",
    "webp": "./assets/crew/image-douglas-hurley.webp"
  })

  const imageSelect = (image) => {
    setIsImagenSelect(image)
  }

  return (
    <main className={styles.crewContainer}>   
      <CrewSection select={imageSelect}/>
      <CrewImage select={isImageSelect}/>
    </main>
  )
}
