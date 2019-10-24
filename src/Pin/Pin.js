import React, { useContext, useState } from 'react';
import { CurrentCenterContext } from '../CurrentCenterContext';
import './Pin.css';

const Pin = ({ selectPin, center, selectCenter }) => {
  const [isHovered, updateHoverState] = useState(false);
  const { reliefCenter, setreliefCenter } = useContext(CurrentCenterContext);

  const handleHover = () => {
    setreliefCenter(center)
    updateHoverState(!isHovered)
  }

  if(!isHovered) {
    return(
      <div onMouseEnter={handleHover}>
        <img className="Pin_img" src={'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/location-alt-512.png'} alt="hello"/>
      </div>
    )
  } else {
    return(
      <div className='pin-hover' onMouseLeave={handleHover}>
        <h3>{reliefCenter.name}</h3>
        <p>{reliefCenter.addressPrint}</p>
        <p>{reliefCenter.website}</p>
        <p>{reliefCenter.email}</p>
        <p>{reliefCenter.phone}</p>
        <button onClick={() => selectCenter(true)}>Go to Center!</button>
      </div>
    )
  }
}

export default Pin;