import styles from './styles.module.scss';
import React from 'react';
import { TechnologyHeader } from '../technologyHeader/technologyHeader';
import { TechnologyContent } from '../TechnologyContent/TechnologyContent';

export const TechnologyBody = () => {

  return (
    <main className={styles.technologyContainer}>
      <TechnologyHeader />
      <TechnologyContent />   
    </main>
  )
}