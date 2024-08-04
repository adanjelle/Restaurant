import React from 'react'
import './Home.css'
import Explore from '../../Components/Explore/Explore '
import Header from '../../Components/Header/Header'
import MenuItem from '../../Components/MenuItem/MenuItem'

import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Home() {
  return (
    <div>
      <Header />
      <Explore />
       <MenuItem /> 
      
    </div>
    
    
  )
}

export default Home