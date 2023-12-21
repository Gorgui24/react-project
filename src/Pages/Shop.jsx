import React from 'react'
import { Header } from '../Components/Hero/Header'
import { Popular } from '../Components/Popular/Popular'
import { Printer } from '../Components/Popular/Printer'
import { Access } from '../Components/Popular/Access'
import { Newletter } from '../Components/NewLetter/Newletter'

export const Shop = () => {
  return (
    <div>
      <Header/>
      <Popular/>
      <Printer/>
      <Access/>      
      <Newletter/>
    </div>
  )
}
