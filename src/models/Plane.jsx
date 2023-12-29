import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

import planeScene from '../assets/3d/plane.glb'

const Plane = ({isRotating, ...props}) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(planeScene);
    const {actions} = useAnimations(animations, ref);

    //^ rotation of blade of plane
    useEffect(()=>{
        if(isRotating){
            // actions.blade_rotation?.play()
            actions['Take 001'].play();
        }else{
            //  trun off
            // actions.blade_rotation?.pause()
            actions['Take 001'].stop();
        }
    },[actions, isRotating])



  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene}/>
    </mesh>
  )
  }

export default Plane