import './App.css'
import Text3DScene from './components/Text3d/Text3d'
import { Canvas, extend } from '@react-three/fiber'
import {
  Loader,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from '@react-three/drei'
import { ResizeObserver } from '@juggle/resize-observer'
import { Model } from './components/Moon/Moon2'

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
          rotateSpeed={20}
          autoRotateSpeed={0.3}
        />
        <Model />
      </Canvas>
    </div>
  )
}

export default App
