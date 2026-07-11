"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Lens() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.3;
      coreRef.current.rotation.x = t * 0.15;
    }
    if (ring1.current) ring1.current.rotation.z = t * 0.25;
    if (ring2.current) ring2.current.rotation.z = -t * 0.18;
    if (ring3.current) ring3.current.rotation.x = t * 0.2;

    if (groupRef.current) {
      groupRef.current.rotation.y = state.pointer.x * 0.25;
      groupRef.current.rotation.x = -state.pointer.y * 0.15;
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core wireframe icosahedron - the "lens" */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial color="#22D3EE" wireframe transparent opacity={0.85} />
      </mesh>

      {/* Inner solid core - subtle glow */}
      <mesh>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshBasicMaterial color="#67E8F9" transparent opacity={0.12} />
      </mesh>

      {/* Orbital rings - like an aperture / iris */}
      <mesh ref={ring1} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[1.8, 0.006, 8, 100]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 1.7, Math.PI / 4, 0]}>
        <torusGeometry args={[2.15, 0.005, 8, 100]} />
        <meshBasicMaterial color="#0E7490" transparent opacity={0.55} />
      </mesh>
      <mesh ref={ring3} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[2.5, 0.004, 8, 100]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={1}
      >
        <Suspense fallback={null}>
          <Lens />
        </Suspense>
      </Canvas>
    </div>
  );
}
