import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../home/home';
import { DestinationBody } from '../destination/destinationBody/destinationBody';
import { CrewBody } from '../crew/crewBody/crewBody';
import { TechnologyBody } from '../technology/technologyBody/technologyBody'

export const MyRoutes = () => {

  return(

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/destination' element={<DestinationBody/>}></Route>
      <Route path='/crew' element={<CrewBody />}></Route>
      <Route path='/technology' element={< TechnologyBody/>}></Route>
    </Routes>

  )
}