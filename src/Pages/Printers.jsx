import React from 'react'
import { BannerPrinter } from '../Components/banner/BannerPrinter'
import { PrinterProducts } from '../Components/AllProduct/PrinterProducts'
import { SeeMoreProducts } from '../Components/SeeMoreProducts/SeeMoreProducts'
export const Printers = () => {
  return (
    <div>
      <BannerPrinter/>
      <PrinterProducts/>
      <SeeMoreProducts/>
    </div>
  )
}
