import { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export function Bubbles({ count = 100 }) {
  const meshRef = useRef();
  const imageMeshRef = useRef();
  
  // Load texture
  const texture = useLoader(THREE.TextureLoader, '/ARJUN.jpeg');
  
  // Initialize particles with random positions and speeds
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20; // Spread x
      const y = (Math.random() - 0.5) * 20; // Spread y
      const z = (Math.random() - 0.5) * 10; // Spread z
      const speed = 0.02 + Math.random() * 0.05; // Upward speed
      const scale = 0.1 + Math.random() * 0.3; // Bubble size
      const xOff = Math.random() * Math.PI * 2; // Random starting phase for wobble
      temp.push({ x, y, z, speed, scale, xOff });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const dummyImage = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current || !imageMeshRef.current) return;

    particles.forEach((particle, i) => {
      // Update position
      particle.y += particle.speed;
      // Reset if too high
      if (particle.y > 10) {
        particle.y = -10;
        particle.x = (Math.random() - 0.5) * 20;
        particle.z = (Math.random() - 0.5) * 10;
      }

      // Add wobble
      const wobble = Math.sin(state.clock.elapsedTime * 2 + particle.xOff) * 0.02;
      
      // Update dummy object (Bubble)
      dummy.position.set(particle.x + wobble, particle.y, particle.z);
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();
      
      // Update instance matrix (Bubble)
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Update dummy object (Image)
      dummyImage.position.copy(dummy.position);
      dummyImage.scale.setScalar(particle.scale * 0.7); // Slightly smaller to be inside
      // Make image always face camera
      dummyImage.lookAt(state.camera.position);
      dummyImage.updateMatrix();

      // Update instance matrix (Image)
      imageMeshRef.current.setMatrixAt(i, dummyImage.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
    imageMeshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      {/* Outer Shell */}
      <instancedMesh ref={meshRef} args={[null, null, count]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial 
          color="#e0f7fa"
          roughness={0}
          metalness={0.1}
          transparent
          opacity={0.3} // Lower opacity to see inside better
          transmission={0} // Remove transmission to avoid refraction distortion
          side={THREE.DoubleSide}
          depthWrite={false} // Ensure it doesn't hide the internal image
        />
      </instancedMesh>
      
      {/* Inner Image */}
      <instancedMesh ref={imageMeshRef} args={[null, null, count]}>
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial 
          map={texture}
          transparent
          opacity={1}
          side={THREE.DoubleSide}
        />
      </instancedMesh>
    </group>
  );
}
