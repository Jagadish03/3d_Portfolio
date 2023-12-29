import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import skyScene from '../assets/3d/sky.glb'

// & we are using sky as 3d object when ever we rotate it should rotate so that is why we are not using image
const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_, delta) => {
      if(isRotating){
        skyRef.current.rotation.y += 0.15 * delta
      }
    })

  return (
    // ^ sky is the premitive element so we create mesh
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky