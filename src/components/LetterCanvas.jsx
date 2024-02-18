import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Float, OrbitControls, Text } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { random } from "maath";

const LetterScene = () => {
  // defining the ref for the group
  const ref = useRef();
  const sphereRef = useRef();
  const textRef = useRef();

  // creating a sphere of points
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );
  const [scale, setScale] = useState(1);

  // adding a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const newScale = 1 + window.scrollY * 0.01;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // rotating the group
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  // rotating the sphere
  useFrame((_, delta) => {
    sphereRef.current.rotation.y += delta / 10;
  });

  return (
    <>
      <group rotation={[0, 0, Math.PI / 4]} scale={4} stride={3}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled>
          <PointMaterial
            transparent
            color="white"
            size={0.01}
            sizeAttenuation={true}
            dethWrite={false}
          />
        </Points>
      </group>

      <group>
        <points ref={sphereRef} position={[0, 1.9, 0]} scale={scale}>
          <sphereGeometry args={[1, 64, 64]} />
          <Text scale={0.2} color="#c3fa01" fontSize={1.2}>
            crypto
          </Text>
          <pointsMaterial color="#c3fa01" size={0.01} />
        </points>

        {/* <group position={[0, -2.3, 0]}>
          <Text ref={textRef} scale={0.2} color="#c3fa01" fontSize={1.2}>
            Millions of customers trust us with their digital assets
          </Text>
        </group> */}
      </group>
    </>
  );
};

const LetterCanvas = () => {
  return (
    <Canvas camera={{ fov: 45, near: 0.1, position: [0, 2, 10] }}>
      <LetterScene />
    </Canvas>
  );
};

export default LetterCanvas;
