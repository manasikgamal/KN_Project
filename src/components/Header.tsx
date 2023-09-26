import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate=useNavigate();
  function handleHome() {
    navigate("/");
    }
    function handleShip() {
      navigate("/shipments");
      }
  return (
    <header className='sticky top-0 z-40 shadow-md py-1 px-4 bg-white flex justify-between'>
        <img className='relative flex items-center h-20 ' src='https://th.bing.com/th/id/R.29f8ccc53a6548ea61bb205fcff2b81f?rik=VP27AaWEtMNtzA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-y0cg9enMwT4%2fT_b31lhvG-I%2fAAAAAAAAADY%2fLxLndSrl874%2fs1600%2fkuehne.jpg&ehk=vEnxhaeL0V4nxDeMER5tdMwIFoQjxUSUApWEebOpjaY%3d&risl=&pid=ImgRaw&r=0' alt=''/>
        <div className='flex justify-around items-center md:w-1/6 w-1/3 mr-5'>
            <p className='text-xl text-blue-900 font-semibold mr-5 cursor-pointer hover:text-blue-500 hover:scale-110 transition' onClick={handleHome}>Home</p>
            <p className='text-xl text-blue-900 font-semibold cursor-pointer  hover:text-blue-500 hover:scale-110 transition' onClick={handleShip}>Shipments</p>
        </div>
    </header>
  )
}
