import { Text3D, Center, Float } from "@react-three/drei";

export const Title = () => {
  return (
    <Float floatIntensity={2} rotationIntensity={0.5} speed={2}>
      <Center position-y={1}>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          HAPPY BIRTHDAY nanba
          <meshNormalMaterial />
        </Text3D>
      </Center>
      <Center position-y={-0.5}>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={0.4}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Make a wish!
          <meshStandardMaterial color="hotpink" />
        </Text3D>
      </Center>
    </Float>
  );
};
