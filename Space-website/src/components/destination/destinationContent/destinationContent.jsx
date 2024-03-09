import styles from './content.module.scss';
import { DestinationNav } from '../destinationNav/destinationNav';
import { useState } from 'react';

export const DestinationContent = () => {

  const [IsSelect, setIsSeleted] = useState({
    "name": "Moon",
    "images": {
      "png": "./src/assets/destination/image-moon.png",
      "webp": "./src/assets/destination/image-moon.webp"
    },
    "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "travel": "3 days"
  })
  const infoSelect = (itemSelect) => {
    setIsSeleted(itemSelect)
  }
  return (
    <section className={styles.content}>
      <div className={styles.sectionImages}>
        <img src={IsSelect.images.png}></img>     
      </div>
      <div className={styles.sectionNavigable}>
        <div className={styles.navContainer}>
          <DestinationNav select={infoSelect} />
        </div>
        <article className={styles.sectionText}>
          <p className={styles.title}>{IsSelect.name}</p>
          <p className={styles.paragraph}>{IsSelect.description}</p>
          <div className={styles.cardsContainer}>
            <div className={styles.cardInfo}>
              <p>AGV. DISTANCE</p>
              <h3>{IsSelect.distance}</h3>
            </div>
            <div className={styles.cardInfo}>
              <p>EST. TRAVEL TIME</p>
              <h3>{IsSelect.travel}</h3>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}