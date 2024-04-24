import React from 'react'
import LogoIcon from '../../assets/icons/LogoIcon'
import LinkedInIcon from '../../assets/icons/LinkedInIcon'
import InstagramIcon from '../../assets/icons/InstagramIcon'
import TelegramIcon from '../../assets/icons/TelegramIcon'
import './Footer.scss'

export default function Footer() {
  let logoHandler = (e) =>{
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <footer className='footer'>
        <div className="footer__wrapper">
            <div onClick={logoHandler}><LogoIcon /></div>
            <div className="footer__social">
                <a href="#"><TelegramIcon/></a>
                <a href="#"><InstagramIcon/></a>
                <a href="#"><LinkedInIcon/></a>
            </div>
        </div>
    </footer>
  )
}
