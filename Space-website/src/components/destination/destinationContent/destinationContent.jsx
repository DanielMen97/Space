import styles from './content.module.scss';
import image from '../../../assets/destination/image-moon.png';
import data from '../../../data.json';

export const DestinationContent = (planet) => {

  const filterData = data.destinations.filter(item => item === planet)

  console.log(filterData)
  
  return (
    <section>
      <div className={styles.sectionImage}>
        <img src={image}/>
      </div>
      <div className={styles.sectionText}>

        {/* {
          filterData.map((element, index) => {
            if(element.name === planet){
              console-log(element)
            return (
              <div key={index}>
                <h2>{element.name}</h2>
                <p>{element.description}</p>
                <p>AVG. DISTANCE {element.distance}</p>
                <p>EST. TRAVEL TIME {element.travel} </p>
              </div>
            )
            }
          })
        } */}
        
      </div>
    </section>
  )
}