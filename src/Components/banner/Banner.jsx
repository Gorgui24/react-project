import React from 'react'
import './banner.css'
export const Banner = (props) => {
  return (
    <div className='banner'>
        <h1>{props.title}</h1>
       
        <div>{props.description}</div>
       

    </div>
  )
}
