import {React, useState} from 'react';
import { CrewNav } from '../crewNav/crewNav';

export const CrewContent = () => {

  const [IsSelect, setIsSelect] = useState({});
  
  const infoSelect = (itemselect) => {
    setIsSelect(itemselect)
  }

  return (
    <div>
      <CrewNav select={infoSelect}/>
    </div>
  )
}

