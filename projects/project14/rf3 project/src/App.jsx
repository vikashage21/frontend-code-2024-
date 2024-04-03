
import { useRef } from 'react'
import './App.css'
import { Canvas, events, useFrame } from "@react-three/fiber"
import { useState } from 'react'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import {DragControls, Text3D, TransformControls} from '@react-three/drei'
import { Suspense } from 'react';




const Cube = ({ position, size, color }) => {
  const ref = useRef()
  let [isHover, setHover] = useState(false)
  useFrame((state, delta) => {
    const speed = isHover ? 2.0 : 0.2
    ref.current.rotation.y += delta * speed
    { isHover ? ref.current.rotation.x += delta * speed : ref.current.rotation.y }
  })
  return (

    <mesh position={position} ref={ref} onPointerEnter={(events) => (events.stopPropagation(), setHover(true))} onPointerLeave={() => setHover(false)} >
      <sphereGeometry args={size} />
     

      <meshStandardMaterial color={isHover ? "blue" : "white"} wireframe />

    </mesh>
  
  )
}




function App() {


  return (
    <>
      <Canvas>
        <directionalLight position={[0, 0, 2]} />
        {/* creating a treater for our scean */}
      
          
     
        <Cube position={[0, 0, 0]} color={"orange"} size={[1, 30, 30]} />
      
     



      </Canvas>

    </>
  )
}

export default App
