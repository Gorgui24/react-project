import React from 'react'
import { Banner } from './Banner'
import banner_access from '../Assets/acessoires/dataBanner'

export const BannerAccess = () => {
  return (
    <div>
        <div className='bannerAccess'>
            {banner_access.map((item, i)=>{
                return <Banner key={i} id={item.id} title={item.title} image={item.image} description={item.description} />

            })}

        </div>
    </div>
  )
}
