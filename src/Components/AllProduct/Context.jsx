import React from 'react'
import './Context.css'

export const Context = (props) => {
  return (
    <div className='Context'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>                
                    ${props.new_price}                
            </div>
            <div className='item-price-old'>                
                    ${props.old_price}                
            </div>
            
            
        </div>
        
            <button>Voir L'article</button>
            

    </div>
  )
}
