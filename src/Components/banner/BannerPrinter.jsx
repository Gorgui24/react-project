import React from 'react'
import { Banner } from './Banner'
import banner_laptop from '../Assets/printers/dataBanner'

export const BannerPrinter = () => {
  return (
    <div>
        <div className='bannerPrinter'>
            {banner_laptop.map((item, i)=>{
                return <Banner key={i} id={item.id} title={item.title} image={item.image} description={item.description} />

            })}

        </div>
    </div>
  )
}
