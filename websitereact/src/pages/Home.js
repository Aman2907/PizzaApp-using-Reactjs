import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../photo/pizza.jpeg'
import '../Style/Home.css'

export function Home() {
  return ( 
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer' > 
        <h1>  Pizza Store </h1>
  
        <p>  Pizza to fit any taste </p>  
        <Link to='/menu'>
        <div className='butt'>
          <button > Order Now </button>
        </div> 
        </Link>   
      </div>
    </div>
  )
}


