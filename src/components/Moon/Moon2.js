/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Moon2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Mars.geometry}
        material={materials.Mars}
        scale={4.5}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload('/Moon2.glb')
