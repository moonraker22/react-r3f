import * as React from 'react'
import { DoubleSide, Vector3 } from 'three'
// import { withKnobs, number, color as colorKnob } from '@storybook/addon-knobs'
import { Canvas } from '@react-three/fiber'

// import { Setup } from '../Setup'
// import { useTurntable } from '../useTurntable'

import {
  Text,
  Text3D,
  Float,
  Center,
  Edges,
  MeshWobbleMaterial,
} from '@react-three/drei'
import { useEffect } from 'react'

// export default {
//   title: 'Abstractions/Text3D',
//   component: Text,
//   decorators: [withKnobs, (storyFn) => <Setup cameraPosition={new Vector3(0, 0, 5)}>{storyFn()}</Setup>],
// }

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
                {/* <meshNormalMaterial color={'blue'} /> */}
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
// export const Text3DSt = () => <Text3DScene />
// Text3DSt.storyName = 'Default'
