import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../home/home';
import { DestinationBody } from '../destination/destinationBody/destinationBody';
import { CrewBody } from '../crew/crewBody/crewBody';

export const MyRoutes = () => {

  return(

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/destination' element={<DestinationBody/>}></Route>
      <Route path='/crew' element={<CrewBody />}></Route>
    </Routes>

  )
}