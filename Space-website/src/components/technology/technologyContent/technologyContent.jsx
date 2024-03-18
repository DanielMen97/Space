import { React, useState, useEffect } from 'react';
import { TechnologyNav } from '../technologyNav/technologyNav';
import styles from './styles.module.scss'

export const TechnologyContent = () => {

  const [infoSelect, setInfoSelect] = useState({
    "name": "Launch vehicle",
    "images": {
      "portrait": "./src/assets/technology/image-launch-vehicle-portrait.jpg",
      "landscape": "./src/assets/technology/image-launch-vehicle-landscape.jpg"
    },
    "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  })

  const techInfoSelect = (itemSelect) => {
    setInfoSelect(itemSelect)
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [])

  return (
    <div className={styles.contentContainer}>
      <section className={styles.sectionContainer}>
        <div className={styles.navbarContainer}>
          <TechnologyNav select={techInfoSelect} />
        </div>
        <article className={styles.articleContainer}>
          <p className={styles.label}>THE TERMINOLOGY...</p>
          <p className={styles.name}>{infoSelect.name}</p>
          <p className={styles.description}>{infoSelect.description}</p>
        </article>
      </section>
      <div className={styles.imageContainer}>
        {
          (windowWidth <= 768) ? <img className={styles.imageTech} src={infoSelect.images.landscape}></img> : <img className={styles.imageTech} src={infoSelect.images.portrait}></img>
        }
      </div>
    </div>


  )
}

