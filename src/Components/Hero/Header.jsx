import React from 'react'
import './Header.css'
import lastnew from '../Assets/Apple_MacBook.png'
import handicon from '../Assets/hand-icon.png'
export const Header = () => {
  return (
    <div className='header-h'>
        <div className='header-left'>
            <h2>NET SHOP</h2>
            <div>
                
                <p>Votre fournisseur d'équipement informatique</p>
                <p>de dernière Génération</p>
            </div>
            <div className='header-latest-btn'>
                <div>Plus d'Infos</div>
                <img src="" alt="" />
            </div>
        </div>
        <div className='header-right'>
        <img src={lastnew} alt="" />
        </div>

    </div>
  )
}
