"use client";

import { useRef, useMemo, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 20;
const CONNECT_DIST = 3.4;

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
    }
    return arr;
  }, []);

  const velocities = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 0.004;
    }
    return arr;
  }, []);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const maxSegments = NODE_COUNT * 8;
    const linePositions = new Float32Array(maxSegments * 6);
    geo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return geo;
  }, []);

  const frameCount = useRef(0);

  useFrame((state) => {
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return;
    const skipHeavyCalc = frameCount.current % 6 !== 0;

    const posAttr = pointsRef.current?.geometry.attributes.position as THREE.BufferAttribute;
    if (!posAttr) return;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < NODE_COUNT; i++) {
      arr[i * 3] += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];

      if (Math.abs(arr[i * 3]) > 10) velocities[i * 3] *= -1;
      if (Math.abs(arr[i * 3 + 1]) > 6) velocities[i * 3 + 1] *= -1;
      if (Math.abs(arr[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1;
    }
    posAttr.needsUpdate = true;

    const linePosAttr = linesRef.current?.geometry.attributes.position as THREE.BufferAttribute;
    if (linePosAttr && !skipHeavyCalc) {
      const lineArr = linePosAttr.array as Float32Array;
      let idx = 0;
      const maxSegments = NODE_COUNT * 8;
      for (let i = 0; i < NODE_COUNT && idx < maxSegments; i++) {
        for (let j = i + 1; j < NODE_COUNT && idx < maxSegments; j++) {
          const dx = arr[i * 3] - arr[j * 3];
          const dy = arr[i * 3 + 1] - arr[j * 3 + 1];
          const dz = arr[i * 3 + 2] - arr[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < CONNECT_DIST) {
            lineArr[idx * 6] = arr[i * 3];
            lineArr[idx * 6 + 1] = arr[i * 3 + 1];
            lineArr[idx * 6 + 2] = arr[i * 3 + 2];
            lineArr[idx * 6 + 3] = arr[j * 3];
            lineArr[idx * 6 + 4] = arr[j * 3 + 1];
            lineArr[idx * 6 + 5] = arr[j * 3 + 2];
            idx++;
          }
        }
      }
      for (let k = idx; k < maxSegments; k++) {
        lineArr[k * 6] = 0;
        lineArr[k * 6 + 1] = 0;
        lineArr[k * 6 + 2] = 0;
        lineArr[k * 6 + 3] = 0;
        lineArr[k * 6 + 4] = 0;
        lineArr[k * 6 + 5] = 0;
      }
      linePosAttr.needsUpdate = true;
    }

    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = t * 0.015 + mouse.current.x * 0.15;
      groupRef.current.rotation.x = mouse.current.y * 0.08;
    }
  });

  useFrame((state) => {
    mouse.current.x = state.pointer.x;
    mouse.current.y = state.pointer.y;
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#22D3EE" size={0.045} transparent opacity={0.55} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#0E7490" transparent opacity={0.22} />
      </lineSegments>
    </group>
  );
}

export default function NetworkField() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(id);
  }, []);

  if (!ready) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: false, alpha: true }}
        dpr={1}
      >
        <Suspense fallback={null}>
          <NetworkNodes />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg" />
    </div>
  );
}
