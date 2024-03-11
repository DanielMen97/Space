import React from 'react';
import styles from './styles.module.scss';
import imagen from "../../../assets/crew/image-douglas-hurley.png"

export const CrewImage = ({select}) => {

  console.log(select.png)

  return (
    <div className={styles.imageContainer}>
      <img src={select.png}></img>
    </div>
  )
}