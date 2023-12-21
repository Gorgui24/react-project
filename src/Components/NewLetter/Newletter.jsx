import React from 'react'
import './Newletter.css'

export const Newletter = () => {
  return (
    <div className='newletter'>
        <h1>Recevez nos offres exclusives sur votre email</h1>
        <p>Abonnez-vous à notre newsletter et restez informé</p>
        <div>
            <input type="email" placeholder='Votre email' />
            <button>S'inscrire</button>
        </div>

    </div>
  )
}
