import React from 'react'
import { BannerLaptop } from '../Components/banner/BannerLaptop'
import { LaptopProducts } from '../Components/AllProduct/LaptopProducts'
import { SeeMoreProducts } from '../Components/SeeMoreProducts/SeeMoreProducts'


export const Laptop = () => {
  return (
    <div>
      <BannerLaptop/>
      <LaptopProducts/>
      <SeeMoreProducts/>
      
    </div>
  )
}
