import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const EthereumScene = () => {
  const model = useGLTF("/model/ethereum_logo.glb");

  return (
    // Add directional light and point light to the scene and render the Ethereum logo
    <group>
      <directionalLight intensity={9} position={[1.4, 1.9, 0.5]} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
      <Float floatingRange={[-0.2, 0.2]} speed={1}>
        <primitive object={model.scene} position={[0, 0, 0]} scale={1.5} />
      </Float>
    </group>
  );
};

const EthereumCanvas = () => {
  return (
    // Add camera to the scene and render the EthereumScene
    <Canvas camera={{ fov: 45, near: 0.1, position: [0, 2, 5] }}>
      <EthereumScene />
    </Canvas>
  );
};

export default EthereumCanvas;
