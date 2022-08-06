import * as React from 'react'
import { DoubleSide, Vector3 } from 'three'
import { Canvas } from '@react-three/fiber'

import {
  Text,
  Text3D,
  Float,
  Center,
  Edges,
  MeshWobbleMaterial,
} from '@react-three/drei'

function Text3DScene() {
  return (
    <>
      <Canvas>
        <React.Suspense fallback={null}>
          <Center>
            <Float floatIntensity={2} speed={2}>
              <Text3D
                font={'/fira.json'}
                bevelEnabled
                bevelSize={0.03}
                castShadow={true}
                scale={2}
              >
                MooNRakeR
                <MeshWobbleMaterial color={'red'} speed={0.5} factor={0.1} />
              </Text3D>
            </Float>
          </Center>
        </React.Suspense>
      </Canvas>
    </>
  )
}

export default Text3DScene
