import './App.css'
import Text3DScene from './components/Text3d/Text3d'
import { Canvas, extend } from '@react-three/fiber'
import {
  Loader,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Html,
} from '@react-three/drei'
import { ResizeObserver } from '@juggle/resize-observer'
import { Moon } from './components/Moon/Moon2'
import { Apollo } from './components/Apollo/Apollo'

function App() {
  // function Model({ url }) {
  //   const { nodes } = useGLTF(url)
  //   return (
  //     // console.log(nodes)
  //     <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
  //       <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
  //         <mesh
  //           receiveShadow
  //           castShadow
  //           geometry={nodes['x3d-cm-exterior-filler'].geometry}
  //           material={nodes['x3d-cm-exterior-filler'].material}
  //         />
  //         <mesh
  //           geometry={nodes.planet003.geometry}
  //           material={nodes.planet003.material}
  //         />
  //       </group>
  //     </group>
  //   )
  // }

  // const scene = useGLTF(
  //   './apollo_exterior-150k-4096-gltf/apollo_exterior-150k-4096.gltf'
  // )
  // console.log(scene)
  return (
    <div style={{ height: '100vh', width: '100vw', background: 'black' }}>
      <div className='bg' />
      <div className='header'>
        <h1>Wassuuup</h1>
      </div>
      <Canvas resize={{ polyfill: ResizeObserver }}>
        <Stars radius={500} depth={10} count={2000} factor={10} />
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={1000}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </PerspectiveCamera>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotateSpeed={0.3}
        />
        <Moon />
        <Html
          as='div' // Wrapping element (default: 'div')
          // wrapperClass // The className of the wrapping element (default: undefined)
          prepend // Project content behind the canvas (default: false)
          center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
          // fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
          // distanceFactor={100} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
          // zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
          // portal={domnodeRef} // Reference to target container (default=undefined)
          // transform // If true, applies matrix3d transformations (default=false)
          // sprite // Renders as sprite, but only in transform mode (default=false)
          // calculatePosition={(el: Object3D, camera: Camera, size: { width: number; height: number }) => number[]} // Override default positioning function. (default=undefined) [ignored in transform mode]
          // occlude={[ref]} // Can be true or a Ref<Object3D>[], true occludes the entire scene (default: undefined)
          // onOcclude={(visible) => null} // Callback when the visibility changes (default: undefined)
          // {...groupProps} // All THREE.Group props are valid
          // {...divProps} // All HTMLDivElement props are valid
          position={[10, 0, 0]}
        >
          <h1 className='header'>hello</h1>
          <p>world</p>
        </Html>
        <Apollo position={[900, 0, 1200]} autoRotate scale={[1, 1, 0.04]} />
      </Canvas>
    </div>
  )
}

export default App
