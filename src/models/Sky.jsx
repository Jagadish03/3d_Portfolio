import { useGLTF } from '@react-three/drei'
import React from 'react'
import skyScene from '../assets/3d/sky.glb'

// & we are using sky as 3d object when ever we rotate it should rotate so that is why we are not using image
const Sky = () => {
    const sky = useGLTF(skyScene);
  return (
    // ^ sky is the premitive element so we create mesh
    <mesh>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky