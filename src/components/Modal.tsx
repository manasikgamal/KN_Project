import { PencilSquareIcon } from "@heroicons/react/24/solid";
import React from "react";
import { shipmentinterface } from "./shipmentsInterface";
import { useDispatch } from 'react-redux'
import { saveData } from './reducers/shipmentReducer';


interface modelinterface {
    shipment: shipmentinterface
}
const Modal: React.FC<modelinterface> = ({ shipment }) => {
    const dispatch=useDispatch()
    const [showModal, setShowModal] = React.useState(false);
    const [editShipment,setEditShipment] = React.useState(shipment)
    const handlesubmit=(e:any)=>{
        e.preventDefault();
        alert("Update Done")
      }
    return (
        <>
            <button
                className="bg-cyan-500 px-2 py-1 rounded active:bg-cyan-700 font-bold text-sm shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                    setShowModal(true);
                }
                }
            >
                <PencilSquareIcon className='w-4 h-4 bg-cyan-500 text-white  active:bg-cyan-700 ' />
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative h-96  w-3/4 my-6 mx-auto max-w-5xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-2 border-slate-200 rounded-t">
                                    <h5 className="text-lg font-semibold p-2">
                                        SHIPMENT DETAILS
                                    </h5>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                   
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="my-4 text-slate-500 text-lg leading-relaxed whitespace-pre-wrap">
                                        <form className="w-full max-w-5xl" >
                                            <div className="flex flex-wrap -mx-3 mb-3">
                                                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    OrderNo
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline focus:bg-white" id="grid-first-name" type="text" 
                                                    defaultValue={shipment.orderNo}
                                                    disabled/>
                                                </div>
                                                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    Date
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline focus:bg-white" id="grid-first-name" type="text" 
                                                    defaultValue={shipment.date}
                                                    onChange={(e)=>setEditShipment({...editShipment,date:e.target.value})}/>
                                                </div>
                                                </div>
                                                <div className="flex flex-wrap -mx-3 mb-3">
                                                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    Customer
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline focus:bg-white" id="grid-first-name" type="text" 
                                                    defaultValue={shipment.customer}
                                                    onChange={(e)=>setEditShipment({...editShipment,customer:e.target.value})}/>
                                                </div>
                                                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    TrackingNO
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline focus:bg-white" id="grid-first-name" type="text" 
                                                    defaultValue={shipment.trackingNo}
                                                    onChange={(e)=>setEditShipment({...editShipment,trackingNo:e.target.value})}/>
                                                </div>
                                                </div>
                                                <div className="flex flex-wrap -mx-3 mb-3">
                                                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    Consignee
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline focus:bg-white" id="grid-first-name" type="text" 
                                                    defaultValue={shipment.consignee}
                                                    onChange={(e)=>setEditShipment({...editShipment,consignee:e.target.value})}/>
                                                </div>
                                                <div className="w-full md:w-1/2 px-3 mb-1 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    Status
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline focus:bg-white" id="grid-first-name" type="text" 
                                                    defaultValue={shipment.status}
                                                    onChange={(e)=>setEditShipment({...editShipment,status:e.target.value})}/>
                                                </div>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {setShowModal(false);
                                            dispatch(saveData(editShipment)) }}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
export default Modal;