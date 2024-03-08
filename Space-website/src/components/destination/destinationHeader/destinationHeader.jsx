import styles from "./styles.module.scss";

export const DestinationHeader = () => {
  return(
    <div className={styles.headerContainer}>
      <h2 className={styles.number}>01</h2>
      <h2 className={styles.title}>PICK YOUR DESTINATION</h2>
    </div>
  )
}