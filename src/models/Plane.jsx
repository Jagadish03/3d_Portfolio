import { useEffect, useRef } from 'react'

import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({isRotating, ...props}) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(planeScene);
    const {actions} = useAnimations(animations, ref);

    //^ rotation of blade of plane
    useEffect(()=>{
        if(isRotating){
            actions.blade_rotation?.play()
        }else{
            //  trun off
            actions.blade_rotation?.pause()
        }
    },[actions, isRotating])
  return (
    <mesh {...props}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane