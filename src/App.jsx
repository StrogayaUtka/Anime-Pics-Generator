import React, { useState } from "react";
import './App.css'
import Spinner from './spinner'
import AYAYAimage from './images/AYAYA.png'

export const App = () => {

  const [image, setImage] = useState(null)
  const [hidden, setHidden] = useState(false)

   const onAnimeClick = async () => {

    setImage(null)
    setHidden(true)

    document.querySelector('.lds-css').classList.remove('hidden')

    const result = await fetch('https://api.waifu.pics/sfw/waifu').
    then(response => response.json());

    
    setImage(result.url)
  }

  const hideSpinner = () => {
    setHidden(false)
  }

  
    return (
      <React.Fragment>
      <h1>
          <img src={AYAYAimage} className='AYAYA' onClick={onAnimeClick} alt="AYAYA"/>
      </h1>
      <div className='imagespace'>
      <Spinner hidden={hidden}/>
        <img src={image}
         className={hidden ? 'hidden' : null}
         onLoad={hideSpinner} />
      </div>  
      </React.Fragment>
    );

}

export default App
