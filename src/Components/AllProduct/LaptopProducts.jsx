import React from 'react'
import { Context } from './Context'
import data_products from '../Assets/laptop/laptopProducts/dataProducts'


export const LaptopProducts = () => {
  return (
    <div className='popular_laptop'>
            {data_products.map((item, i)=>{
                return <Context key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

            })}

        </div>
  )
}
