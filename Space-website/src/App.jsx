import styles from './App.module.css';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';

function App() {

  return (
    <div className={styles.app}>
      <Navbar />
      <Home />
    </div>
  )
}

export default App;
