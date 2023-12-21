import React from 'react'
import { Banner } from './Banner'
import banner_laptop from '../Assets/laptop/dataBanner'
import './banner.css'

export const BannerLaptop = () => {
  return (
    <div>
        <div className='bannerLaptop'>
            {banner_laptop.map((item, i)=>{
                return <Banner key={i} id={item.id} title={item.title} image={item.image} description={item.description} />

            })}

        </div>
    </div>
  )
}
