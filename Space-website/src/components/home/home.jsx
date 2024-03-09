import styles from './home.module.css';
import { NavLink } from 'react-router-dom';

export const Home = () => {

  return (
    <div className={styles.home_container}>
      <section className={styles.home_section}>
        <h5>So, you want to travel to</h5>
        <article className={styles.title}>Space</article>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!</p>
      </section>
      <div className={styles.home_explore}>
        <NavLink className={styles.link} to='/destination'>
          <p>Explore</p>
        </NavLink>
      </div>
    </div>
  )

}