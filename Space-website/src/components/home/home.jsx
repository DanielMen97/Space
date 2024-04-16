import styles from './home.module.scss';
import { NavLink } from 'react-router-dom';

export const Home = () => {

  return (
    <div className={styles.homeContainer}>
      <section className={styles.homeSection}>
        <h5>So, you want to travel to</h5>
        <article className={styles.title}>Space</article>
        <p className={styles.parrafoHome}>Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!</p>
      </section>
      <div className={styles.homeExplore}>
        <NavLink className={styles.link} to='/destination'>
          EXPLORE
        </NavLink>
      </div>
    </div>
  )

}