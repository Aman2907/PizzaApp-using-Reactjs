import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Style/Footer.css'

export function Footer() {
  return (
    
    <div className='footer'>
      <div className='socialMedia'> <InstagramIcon/> <FacebookIcon/> <TwitterIcon /> <WhatsAppIcon />  </div>
      <p> &copy; 2023 amansharma.com</p>
    </div>
  )
}


