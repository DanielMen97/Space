import styles from './App.module.css';
import { Navbar } from './components/navbar/navbar';
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from './components/routes/myroutes';

function App() {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navbar />
        <MyRoutes></MyRoutes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
