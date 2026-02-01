import React from 'react'
import Versace from "./images/Versace.svg";
import Zara from "./images/Zara.svg";
import Gucci from "./images/Gucci.svg";
import Prada from "./images/Prada.svg";
import CalvinKlein from "./images/CalvinKlein.svg";

const MyComponent = () => {
  return (
    <div className="flex  items-center justify-between gap-30 py-10">
            <img src={Versace} alt="" />
            <img src={Zara} alt="" />
            <img src={Gucci} alt="" />
            <img src={Prada} alt="" />
            <img className='mr-24' src={CalvinKlein} alt="" />
          </div>
  )
}

export default MyComponent
