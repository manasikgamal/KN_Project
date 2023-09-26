import React from 'react'
import Data from './Data'

export default function Body() {
  return (
    <div>
        <div className='relative mt-2 md:mb-36'>
        <img className='w-full h-64 md:h-screen' src='https://www.wqis.com/wp-content/uploads/2020/06/Cargo-Ships.jpg' alt=''/>
        <div className='absolute top-5 md:top-10 w-full '>
            <h1 className='text-white text-3xl md:text-6xl text-center'>We shape the world of logistics</h1>
        </div>
        <div className='absolute -bottom-14 left-4 md:left-24 md:-bottom-28'>
            <img className='w-32 h-32 md:w-72 md:h-64 rounded-lg border-4 border-white' src='https://www.supply-chain.gr/wp-content/uploads/2017/02/Kuehne-Nagel-3.jpg' alt=''/>
        </div>
        </div>
        <Data/>
    </div>
  )
}
