import { DestinationContent } from "../destinationContent/destinationContent";
import { DestinationHeader } from "../destinationHeader/destinationHeader";
import styles from "./styles.module.scss";
import data from '../../../data.json';
import { NavLink } from "react-router-dom";
import { useState } from 'react'

export const DestinationBody = () => {

  const [ isActive, setIsActive ] = useState({
    "name": "Moon",
    "images": {
      "png": "./assets/destination/image-moon.png",
      "webp": "./assets/destination/image-moon.webp"
    },
    "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "travel": "3 days"
  })

  const handleIsSelect = (element) => {
    

    setIsActive(element)

  }


  return (
    <main className={styles.destinationContainer}>
      <DestinationHeader />
      <nav>
        <ul>
          {
            data.destinations.map((element, index) => {
              return (
                  <li onClick={() =>handleIsSelect(element)} key={index}>
                    {element.name}
                  </li>
              )
            }
            )
          }
        </ul>
      </nav>
      <DestinationContent planet={isActive}/>
    </main>
  )
}