import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float, Icosahedron, TorusKnot } from "@react-three/drei";
import * as THREE from "three";

/**
 * ParticleField Component
 * Renders a swarm of points that rotate and react subtly to mouse position.
 */
const ParticleField = () => {
  const pointsRef = useRef(null);
  const { mouse } = useThree();

  // Generate random points in a spherical volume
  const [positions] = useMemo(() => {
    const count = 3000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const distance = 5 + Math.random() * 10;

      pos[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = distance * Math.cos(theta);
    }
    return [pos];
  }, []);

  // Animate rotation + subtle mouse movement
  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.02;

    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, mouse.x * 0.5, 0.05);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, mouse.y * 0.5, 0.05);
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#9ca3af" // gray tone
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

/**
 * FloatingShapes Component
 * Adds some geometric interest to the scene.
 */
const FloatingShapes = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[1, 1]} position={[4, 2, -5]}>
          <meshStandardMaterial color="#9ca3af" wireframe transparent opacity={0.3} />
        </Icosahedron>
      </Float>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <TorusKnot args={[0.8, 0.3, 100, 16]} position={[-5, -3, -8]}>
          <meshStandardMaterial color="#9ca3af" wireframe transparent opacity={0.2} />
        </TorusKnot>
      </Float>
    </>
  );
};

/**
 * ThreeBackground Component
 * The final 3D background canvas for the Hero section.
 */
const ThreeBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]} gl={{ antialias: true }}>
      {/* Background */}
      <color attach="background" args={["#020617"]} />

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#9ca3af" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#818cf8" />

      {/* 3D content */}
      <ParticleField />
      <FloatingShapes />

      {/* Fog for depth */}
      <fog attach="fog" args={["#020617", 5, 25]} />
    </Canvas>
  );
};

export default ThreeBackground;
