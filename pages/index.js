"use client"; // Add this for Next.js app router

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        
        <Suspense fallback={null}>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color="blue" />
          </mesh>
        </Suspense>
        
        <OrbitControls />
      </Canvas>
    </div>
  );
}
