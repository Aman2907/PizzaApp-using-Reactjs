import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function MenuItem({ image, name, price }) {
  return (
    <div className='menuItem'>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> <CurrencyRupeeIcon/>{price} </p>
    </div>
  )
}

export default MenuItem
