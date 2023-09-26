import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { shipmentAsync } from './services/shipmentService';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { removeData } from './reducers/shipmentReducer';
import Modal from './Modal';



export default function Shipments() {
const dispatch=useDispatch();
const shipments=useSelector((state:any)=>state.shipment.shipmentdetails)
console.log('ggggg',shipments)
  useEffect(()=>{
   dispatch<any>(shipmentAsync()) 
  },[])
  function showData(orderNo: any): any {
    throw new Error('Function not implemented.');
  }
  return (
  <div className="flex flex-col max-h-screen overflow-auto">
  <div className="sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr className='bg-gray-100'>
              <th scope="col" className="px-2 py-4">ORDERNO</th>
              <th scope="col" className="px-2 py-4">DELIVERYDATE</th>
              <th scope="col" className="px-2 py-4">CUSTOMER</th>
              <th scope="col" className="px-2 py-4">TRACKINGO</th>
              <th scope="col" className="px-2 py-4">STATUS</th>
              <th scope="col" className="px-2 py-4">CONSIGNEE</th>
              <th scope="col" className="px-2 py-4"></th>
            </tr>
          </thead>
          <tbody>
          {shipments&&shipments.map((shipment:any)=>(
            <tr key={shipment.orderNo} className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-2 py-4 font-medium">{shipment.orderNo}</td>
              <td className="whitespace-nowrap px-2 py-4">{shipment.date}</td>
              <td className="whitespace-nowrap px-2 py-4">{shipment.customer}</td>
              <td className="whitespace-nowrap px-2 py-4">{shipment.trackingNo}</td>
              <td className="whitespace-nowrap px-2 py-4">{shipment.status}</td>
              <td className="whitespace-nowrap px-2 py-4">{shipment.consignee}</td>
              <td className="whitespace-nowrap px-2 py-4 flex">
                <Modal shipment={shipment}/>
                <button type="button" onClick={()=>dispatch<any>(removeData(shipment.orderNo))} 
                className='bg-red-500 px-2 py-1 rounded active:bg-red-700 font-bold text-sm shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                  <XMarkIcon className='w-4 h-4 bg-red-500 text-white  active:bg-red-700'/></button>
                </td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}
