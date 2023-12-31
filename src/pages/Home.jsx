import {React ,Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky  from '../models/Sky'
import Bird from '../models/Bird'
import Plane  from '../models/Plane'
import HomeInfo from '../components/HomeInfo'


const Home =() => {
    // * implementing roting effect 
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition=[0, -6.5, -43];
        let rotation = [0.1, 4.7, 0]

        if(window.innerWidth < 768){
            screenScale = [0.9, 0.9, 0.9];
        }else{
            screenScale=[1,1,1];
        }
        return[screenScale, screenPosition, rotation]
    }

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;
        

        if(window.innerWidth < 768){
            screenScale = [1.5, 1.5, 1.5];
            screenPosition=[0, -1.5, 0]
        }else{
            screenScale=[3, 3, 3];
            screenPosition=[0, -4, -4]
        }
        return[screenScale, screenPosition]
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen relative '>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            {currentStage && <HomeInfo currentStage={currentStage}/>}
        </div>

        {/* Canvas acts as a root components to set 3D screen */}
        <Canvas 
            className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
            //^ camera is object of canva and has near and far property
            camera={{near:0.1, far:1000}}    
        >
            {/* suspence component is used as wrapper for rendering loading screen */}
            <Suspense fallback={<Loader/>}> 
                {/* Different light display */}
                <directionalLight position={[1, 1, 1]} intensity={2}/> //& simulates the light from distance source ex:sun
                <ambientLight intensity={0.5}/> //& illuminates all objects equally without casting shadows
                <pointLight/>//& emits lights in all directions from single point
                <spotLight/>
                <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>//& illuminates the scene with a gradient
                
                <Bird/>
                <Sky isRotating={isRotating}/>
                <Island
                    scale={islandScale}
                    position={islandPosition}
                    rotation={islandRotation}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                />
                <Plane
                    isRotating={isRotating}
                    planeScale={planeScale}
                    planePosition={planePosition}
                    rotation={[0, 20, 0]}
                />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home