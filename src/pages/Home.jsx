import {React ,Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
    POPUP
</div> */}
function Home() {
  return (
    <section className='w-full h-screen relative'>
        {/* Canvas acts as a root components to set 3D screen */}
        <Canvas 
            className='w-full h-screen bg-transparent'
            //^ camera is object of canva and has near and far property
            camera={{near:0.1, far:1000}}    
        >
            {/* suspence component is used as wrapper for rendering loading screen */}
            <Suspense fallback={<Loader/>}> 
                {/* Different light display */}
                <ambientLight/>
                <directionalLight/>
                <pointLight/>
                <spotLight/>
                <hemisphereLight/>

                <Island/>
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home