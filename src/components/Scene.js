"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef } from "react";

function Rig() {
  const g = useRef();
  const { size } = useThree();
  const wide = size.width >= 900;
  useFrame(({ pointer, clock }) => {
    g.current.rotation.y += (pointer.x * 0.5 - g.current.rotation.y) * 0.04;
    g.current.rotation.x += (-pointer.y * 0.35 - g.current.rotation.x) * 0.04;
    g.current.children[1].rotation.z = clock.elapsedTime * 0.2;
  });
  return (
    <group ref={g} position={wide ? [2.6, 0, 0] : [0, 1.4, -2]}>
      <Float speed={2} floatIntensity={1.5}>
        <mesh><icosahedronGeometry args={[1.5, 6]} />
          <MeshDistortMaterial color="#5b6cff" distort={0.45} speed={2.5} roughness={0.15} metalness={0.7} />
        </mesh>
      </Float>
      <mesh><torusKnotGeometry args={[2.6, 0.05, 220, 12, 2, 3]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1.2} />
      </mesh>
      <Float speed={3} floatIntensity={2}><mesh position={[-2.8, 1.7, 0]}><octahedronGeometry args={[0.35]} /><meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.8} /></mesh></Float>
      <Float speed={2.5} floatIntensity={2}><mesh position={[2.6, -1.9, 1]}><boxGeometry args={[0.5, 0.5, 0.5]} /><meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={0.8} /></mesh></Float>
    </group>
  );
}
export default function Scene() {
  return (
    <div className="bgscene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 1.6]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={90} color="#818cf8" />
        <pointLight position={[-6, -3, 3]} intensity={60} color="#38bdf8" />
        <Stars radius={60} depth={50} count={2500} factor={3} fade speed={1} />
        <Rig />
      </Canvas>
    </div>
  );
}
