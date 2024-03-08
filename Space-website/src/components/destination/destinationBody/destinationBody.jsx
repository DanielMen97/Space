import { DestinationContent } from "../destinationContent/destinationContent";
import { DestinationHeader } from "../destinationHeader/destinationHeader";
import styles from "./styles.module.scss";
import data from '../../../data.json';
import { NavLink } from "react-router-dom";
import { useState } from 'react'

export const DestinationBody = () => {

  const [ isActive, setIsActive ] = useState()

  const handleIsSelect = (element) => {
    
    setIsActive(element.name)

  }

  console.log(isActive)

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