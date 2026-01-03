import { Suspense, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Overlay } from "./components/Overlay";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
      <color attach="background" args={["#001e36"]} />
      <fog attach="fog" args={['#001e36', 10, 25]} />
      <Suspense fallback={null}>
        <Experience started={started} />
      </Suspense>
    </Canvas>
    <Overlay started={started} setStarted={setStarted} />
    </>
  );
}

export default App;
