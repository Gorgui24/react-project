import React from 'react'
import './Popular.css'
import data_laptop from '../Assets/printers/data'
import { Item } from '../items/Item'

export const Printer = () => {
  return (
    <div className='popular'>
        <h1>Des photocopieuses et imprimantes couleurs & Noir/Blanc</h1>
        <hr />
        <div className='popular_laptop'>
            {data_laptop.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

            })}

        </div>
        
    </div>
    
  )
}
