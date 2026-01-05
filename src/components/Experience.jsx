import { OrbitControls, Environment } from "@react-three/drei";


import { Bubbles } from "./Bubbles";
import { TypingText } from "./TypingText";

export const Experience = ({ started }) => {
  return (
    <>
      <OrbitControls makeDefault enableZoom={false} enablePan={false} />
      
      {/* Lights - Ocean Mood */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <spotLight position={[0, 10, 0]} intensity={2} angle={0.5} penumbra={1} color="#00b4d8" />
      <pointLight position={[-10, -5, -10]} intensity={1} color="#48cae4" />

      {/* Content - Only show when started (or animate in) */}
      {started && (
        <group position={[0, 0, 0]}>


          <Bubbles />
          <TypingText 
            title="Happy Birthday My Friend!" 
            subtitle={"May God bless you with endless joy and peace. May His light guide your path always."}
          />
        </group>
      )}

      {/* Environment for better reflections */}
      <Environment preset="night" blur={0.8} />
    </>
  );
};
