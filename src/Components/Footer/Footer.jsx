import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import linkedin_icon from '../Assets/linkedin-icon.png'
import whatsap_icon from '../Assets/wathsapp-icon.png'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src="" alt="" />
            <p>NET SHOP</p>
            </div>
            <ul className="foot-links">
                <li>Entreprise</li>
                <li>Produits</li>
                <li>Bureau</li>
                <li>A propos de nous</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
            <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />

                </div>
                <div className="footer-icons-container">
                    <img src={linkedin_icon} alt="" />

                </div>
                <div className="footer-icons-container">
                    <img src={whatsap_icon} alt="" />
                </div>
                </div>
                <div className="footer-copyright">
                    <p>© 2023 NETSHOP. Tous droits réservés. Développé par Nouvelle Ere Technologie(NET)</p>
                </div>
                <hr />
                
                
            
        

    </div>
  )
}
