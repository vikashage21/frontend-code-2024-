/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 laptop.gltf 
Author: Brandon Westlake (https://sketchfab.com/dr.badass2142)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/laptop-free-a651092825974fc5a405129d4f50a7d2
Title: Laptop (FREE)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/laptop.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-120.874, 0, -354.171]} rotation={[-Math.PI / 2.5, 0.10, 0.60]}>
        <mesh geometry={nodes.Cube002_Laptop_0.geometry} material={materials.Laptop} />
        <mesh geometry={nodes.Cube002_Keys_0.geometry} material={materials.Keys} />
      </group>
      <mesh geometry={nodes.Cube000_Laptop_0.geometry} material={materials.Laptop} position={[133.663, 0, -500.445]} rotation={[-Math.PI / -0.59, 0.22, -0.551]} />
    </group>
  )
}

useGLTF.preload('/laptop.gltf')
