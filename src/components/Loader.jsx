import React from 'react' 
import { Html } from '@react-three/drei'

function Loader() {
  return (
    // ^ loding spinner to load the 3d property
    <Html>
    <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-red-500 rounded-full animate-spin'/>
    </div>
    </Html>
  )
}

export default Loader