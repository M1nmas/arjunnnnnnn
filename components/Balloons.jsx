import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Sphere, Cylinder } from "@react-three/drei";

const Balloon = ({ color, position }) => {
  const ref = useRef();
  
  // Random speed and offset for floating
  const speed = useMemo(() => 0.5 + Math.random(), []);
  const offset = useMemo(() => Math.random() * 100, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.5;
  });

  return (
    <group ref={ref} position={position}>
      {/* Balloon Body */}
      <Sphere args={[0.5, 32, 32]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.1} />
      </Sphere>
      {/* Knot */}
      <Cylinder args={[0.05, 0.05, 0.1, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color={color} />
      </Cylinder>
      {/* String - Simplified as a thin cylinder */}
      <Cylinder args={[0.01, 0.01, 2, 8]} position={[0, -1, 0]}>
        <meshBasicMaterial color="white" opacity={0.5} transparent />
      </Cylinder>
    </group>
  );
};

export const Balloons = () => {
  const colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
  
  // Create random balloons
  const balloons = useMemo(() => {
    return new Array(20).fill(null).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 10, // x
        (Math.random() - 0.5) * 5,  // y
        (Math.random() - 0.5) * 5 - 2 // z (push back a bit)
      ],
      color: colors[Math.floor(Math.random() * colors.length)],
      key: i
    }));
  }, []);

  return (
    <group>
      {balloons.map((props) => (
        <Balloon key={props.key} {...props} />
      ))}
    </group>
  );
};
