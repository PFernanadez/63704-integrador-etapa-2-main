import { Link } from 'react-router-dom'
import './Footer.scss'
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container__social-icons">
        <Link className="footer-container__icon facebook" to={"https://www.facebook.com/"}><BsFacebook/></Link>
        <Link className="footer-container__icon instagram" to={"https://www.instagram.com/"}><BsInstagram/></Link>
        <Link className="footer-container__icon twitter"  to={"https://twitter.com/"}><BsTwitter/></Link>
        <Link className="footer-container__icon youtube" to={"https://www.youtube.com//"}><BsYoutube/></Link>
      </div>
      <div className="footer-container__footer-nav">
        <ul>
          <li><a className="footer-container__list 1" href="">Noticias</a></li>
          <li><a className="footer-container__list 2"href="">Información</a></li>
          <li><a className="footer-container__list 3"href="">Nuestro Equipo</a></li>
          <li><a className="footer-container__list 4"href="">Contactanos</a></li>
        </ul>
    </div>
      <div className="footer-container__footer-bottom">
        <p>Echo por Pedro Fernández</p>
      </div>  
    </div>

  

  )
}

export default Footer