import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

// Official UW Husky colors
const UW_GOLD   = '#B7A57A'
const UW_GOLD_G = '#D4B896'   // brighter for glow / line streaks
const UW_PURPLE = '#4B2E83'
const UW_PURPLE_G = '#7B52C9' // brighter for glow / line streaks

const TOTAL    = 2200
const G_COUNT  = Math.floor(TOTAL * 0.62) // ~62% gold
const P_COUNT  = TOTAL - G_COUNT           // ~38% purple

function makeStar() {
  return {
    x:     (Math.random() - 0.5) * 12,
    y:     (Math.random() - 0.5) * 12,
    z:     -(Math.random() * 95 + 5),   // -100 … -5
    speed: Math.random() * 0.35 + 0.06,
  }
}

function StarWarp() {
  const goldData   = useMemo(() => Array.from({ length: G_COUNT }, makeStar), [])
  const purpleData = useMemo(() => Array.from({ length: P_COUNT }, makeStar), [])

  // 2 verts × 3 coords per line segment
  const goldPos   = useMemo(() => new Float32Array(G_COUNT * 6), [])
  const purplePos = useMemo(() => new Float32Array(P_COUNT * 6), [])

  const goldRef   = useRef()
  const purpleRef = useRef()

  useFrame(() => {
    const tick = (data, pos, ref) => {
      for (let i = 0; i < data.length; i++) {
        const s = data[i]
        const prevZ = s.z
        s.z += s.speed

        if (s.z > 5.5) {
          Object.assign(s, makeStar())
        }

        const streakLen = s.speed * 4.5
        // tail vertex
        pos[i * 6]     = s.x
        pos[i * 6 + 1] = s.y
        pos[i * 6 + 2] = prevZ - streakLen
        // head vertex
        pos[i * 6 + 3] = s.x
        pos[i * 6 + 4] = s.y
        pos[i * 6 + 5] = s.z
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }

    tick(goldData,   goldPos,   goldRef)
    tick(purpleData, purplePos, purpleRef)
  })

  return (
    <>
      {/* Gold streaks */}
      <lineSegments ref={goldRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={G_COUNT * 2}
            array={goldPos}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={UW_GOLD_G} transparent opacity={0.72} />
      </lineSegments>

      {/* Purple streaks */}
      <lineSegments ref={purpleRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={P_COUNT * 2}
            array={purplePos}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={UW_PURPLE_G} transparent opacity={0.45} />
      </lineSegments>
    </>
  )
}

// Central UW-colored orb at the vanishing point
function CentralOrb() {
  const ref = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    ref.current.rotation.y = t * 0.12
    ref.current.rotation.x = t * 0.07
  })

  return (
    <group ref={ref}>
      {/* Solid dark core */}
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshPhongMaterial
          color="#080808"
          emissive={UW_GOLD}
          emissiveIntensity={0.5}
          transparent
          opacity={0.95}
          shininess={80}
        />
      </mesh>

      {/* Purple wireframe cage */}
      <mesh>
        <icosahedronGeometry args={[0.75, 1]} />
        <meshBasicMaterial color={UW_PURPLE} wireframe transparent opacity={0.35} />
      </mesh>

      {/* Gold wireframe cage — slightly larger */}
      <mesh rotation={[0.4, 0.8, 0.2]}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshBasicMaterial color={UW_GOLD} wireframe transparent opacity={0.18} />
      </mesh>

      {/* Glow lights */}
      <pointLight color={UW_GOLD}   intensity={3}   distance={4} />
      <pointLight color={UW_PURPLE} intensity={1.5} distance={6} />
    </group>
  )
}

// Very subtle mouse parallax
function CameraRig() {
  useFrame((state) => {
    state.camera.position.x += (state.pointer.x * 0.4 - state.camera.position.x) * 0.03
    state.camera.position.y += (state.pointer.y * 0.3 - state.camera.position.y) * 0.03
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 80 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.08} />
      <pointLight position={[0, 0, 4]} intensity={0.6} color={UW_GOLD} />

      <StarWarp />

      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.5}>
        <CentralOrb />
      </Float>

      <CameraRig />
    </Canvas>
  )
}
