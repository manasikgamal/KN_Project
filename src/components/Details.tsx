import React, { ComponentType } from 'react'

interface iteminterface{
    Icon?:ComponentType<{className?: string }>,
    number:string,
    text:string
}
export default function Details({Icon,number,text}:iteminterface) {
  return (
    <div className='flex flex-col justify-center items-center text-center py-10 hover:scale-105 transition 
    transform duration-200 ease-out cursor-default'>
   {Icon && <Icon className="h-10 w-10 text-blue-900" />}
        <h1 className='text-2xl text-blue-900'>{number}</h1>
        <h4 className='text-blue-500 text-xl'>{text}</h4>
        </div>
  )
}
