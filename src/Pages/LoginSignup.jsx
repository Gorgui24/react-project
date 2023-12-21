import React from 'react'
import './CSS/LoginSignup.css'
export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Connexion</h1>
        <p>Créer un compte</p>
        <div className="loginsignup-field">
          <input type="text" placeholder='Votre nom' />
          <input type="email" placeholder='Votre adresse email' />
          <input type="password" placeholder='Votre mot de passe' />
        </div>
        <button>Continuer</button>
        <p className="loginsignup-login">Vous avez déjà un compte ?<span> Connectez - vous ici ?</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>En continuant, j'accepte les conditions d'utilisation et la politique de confidentialité.</p>
        </div>
      </div>
    </div>
  )
}
