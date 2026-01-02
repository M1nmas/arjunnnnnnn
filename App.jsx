import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Overlay } from "./components/Overlay";

function App() {
  return (
    <>
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
      {/* Background color can be set here or in a component */}
      <color attach="background" args={["#ffbfcb"]} /> 
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
    <Overlay />
    </>
  );
}

export default App;
