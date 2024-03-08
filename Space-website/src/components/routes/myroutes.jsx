import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../home/home';
import { DestinationBody } from '../destination/destinationBody/destinationBody';

export const MyRoutes = () => {

  return(

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/destination' element={<DestinationBody/>}></Route>
    </Routes>

  )
}