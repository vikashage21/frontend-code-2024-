
import './App.css'
import './index.css'

import Navbar from './components/Navbar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Laptop from '../public/Laptop'
import { useState, Suspense } from 'react'
import Works from './components/Works'
import Stripes from './components/Stripes'



function App() {
  

  return (
    <>
    <Navbar/>
      {/* <Canvas >
        <ambientLight intensity={6} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Laptop  />
        </Suspense>

      </Canvas> */}

      <Works  /> 
      <Stripes/>
    </>
  )
}

export default App
