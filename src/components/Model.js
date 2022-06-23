/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group ref={group} {...props} dispose={null} scale={2.5}>
      <mesh geometry={nodes.Nightstand.geometry} material={materials.Nightstand} />
    </group>
  )
}

useGLTF.preload('/model.glb')
