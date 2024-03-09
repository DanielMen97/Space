import { DestinationContent } from "../destinationContent/destinationContent";
import { DestinationHeader } from "../destinationHeader/destinationHeader";
import styles from "./styles.module.scss";

export const DestinationBody = () => {

  
  return (
    <main className={styles.destinationContainer}>
      <DestinationHeader />     
      <DestinationContent />
    </main>
  )
}