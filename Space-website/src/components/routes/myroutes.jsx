import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../home/home';

export const MyRoutes = () => {

  return(

    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>

  )
}