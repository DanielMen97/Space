import {React, useState} from 'react';
import { TechnologyNav } from '../technologyNav/technologyNav';

export const TechnologyContent = () => {

  const [infoSelect, setInfoSelect] = useState({})

  const techInfoSelect = (itemSelect) => {
    setInfoSelect(itemSelect)
  }

  return (
    <div>
      <TechnologyNav select={techInfoSelect}/>    
    </div>
  )
}

