import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/solid'
import { UserGroupIcon } from '@heroicons/react/24/solid'
import { TruckIcon } from '@heroicons/react/24/solid'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { ClockIcon } from '@heroicons/react/24/solid'
import Details from './Details'
import Gallary from './Gallery'

export default function Data() {
  return (
    <div>
        <div className='bg-gray-100 pb-8 mt-14'>
        <h1 className='text-3xl p-5 font-semibold md:ml-20'>Quantifiable</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-10'>
        <Details Icon={MapPinIcon} number='+1,395' text='locations worldwide'/>
        <Details Icon={GlobeAltIcon} number='5' text='Regions across the world'/>
        <Details Icon={UserGroupIcon} number='+78,000' text='employees in 2019'/>
        <Details Icon={TruckIcon} number='11,3' text='million m2 of warehouse space worldwide'/>
        <Details Icon={PaperAirplaneIcon} number='No.2' text='in global airfreight'/>
        <Details Icon={ClockIcon} number='+130' text='years of corporate history'/>
        </div>
        </div>
        <Gallary/>
    </div>
  )
}
