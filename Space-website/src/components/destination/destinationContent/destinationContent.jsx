import styles from './content.module.scss';
import image from '../../../assets/destination/image-moon.png';

export const DestinationContent = ({planet}) => {


console.log(planet)
  
  return (
    <section>
      <div className={styles.sectionImage}>
        <img src={image}/>
      </div>
      <div className={styles.sectionText}>
        <p>{planet.name}</p>
        <p>{planet.description}</p>

     
      </div>
    </section>
  )
}