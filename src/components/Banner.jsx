import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='container position-relative banner rounded-5 p-4 mt-5'>
        <img src="/assets/images/icon/top-left.svg" alt="" className='top-l' />
        <img src="/assets/images/icon/bottom-left.svg" alt="" className='bottom-l'/>
        <img src="/assets/images/icon/yellow-circle.svg" alt="" className='yellow-circle' />
        <img src="/assets/images/icon/red-circle.svg" alt="" className='red-circle' />
        <img src="/assets/images/icon/bottom-right.svg" alt="" className='bottom-right' />
        <img src="/assets/images/icon/daire.svg" alt="" className='daire' />
        <h1 className='text-white text-center h3'>Inspiring to dream. Creating the devised</h1>
        <p className='text-center text-light'>Dicover the newest articles and case studies from Pecode team</p>
    </div>
  )
}

export default Banner