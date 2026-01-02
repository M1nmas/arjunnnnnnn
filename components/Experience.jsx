import { OrbitControls, Environment } from "@react-three/drei";
import { Title } from "./Text3D";
import { Balloons } from "./Balloons";

export const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault enableZoom={false} />
      
      {/* Lights */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="purple" />

      {/* Content */}
      <group position={[0, 0, 0]}>
        <Title />
        <Balloons />
      </group>

      {/* Environment for better reflections */}
      <Environment preset="sunset" />
    </>
  );
};
