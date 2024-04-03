import { useState, Suspense } from 'react'

import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Laptop from '../public/Laptop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <ambientLight intensity={6} />
        <OrbitCgitontrols />
        <Suspense fallback={null}>
          <Laptop  />
        </Suspense>

      </Canvas>

    </>
  )
}

export default App
