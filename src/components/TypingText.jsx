import { Text, Float } from "@react-three/drei";
import { useState, useEffect } from "react";

const TypingCursor = ({ position }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setVisible((v) => !v), 500);
    return () => clearInterval(interval);
  }, []);
  
  return visible ? (
    <Text
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      fontSize={0.5}
      color="#4cc9f0"
      position={position}
      anchorX="left"
      anchorY="middle"
    >
      |
      <meshStandardMaterial emissive="#4cc9f0" emissiveIntensity={0.8} toneMapped={false} />
    </Text>
  ) : null;
};

export const TypingText = ({ title, subtitle }) => {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [startTypingTitle, setStartTypingTitle] = useState(false);
  const [startSubtitle, setStartSubtitle] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Initial delay to sync with music start
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTypingTitle(true);
    }, 1000); // 1.0s delay for music intro
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startTypingTitle) return;

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < title.length) {
        setDisplayedTitle(title.substring(0, currentIdx + 1));
        currentIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => setStartSubtitle(true), 500); // Pause before subtitle
      }
    }, 150); // Slower typing for "sinking" feel

    return () => clearInterval(interval);
  }, [title, startTypingTitle]);

  useEffect(() => {
    if (!startSubtitle) return;

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < subtitle.length) {
        setDisplayedSubtitle(subtitle.substring(0, currentIdx + 1));
        currentIdx++;
      } else {
        clearInterval(interval);
        setShowCursor(false); // Hide cursor when done
      }
    }, 80); 

    return () => clearInterval(interval);
  }, [subtitle, startSubtitle]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      {/* Title Group */}
      <group position={[0, 1.5, 0]}>
        <Text
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          fontSize={0.5}
          color="#4cc9f0"
          maxWidth={5}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          {displayedTitle}
          <meshStandardMaterial emissive="#4cc9f0" emissiveIntensity={0.5} toneMapped={false} />
        </Text>
        {startTypingTitle && !startSubtitle && showCursor && (
           <TypingCursor position={[displayedTitle.length * 0.15 + (displayedTitle.length > 0 ? 0.2 : 0), 0, 0]} /> 
           // Note: approximate cursor position, simplified for centered text
           // For perfectly centered text, placing cursor at the end is tricky without measuring.
           // Alternative: Just blink the last character or append '|' to the string directly.
        )}
      </group>

      {/* Subtitle Group */}
      <group position={[0, 0.5, 0]}>
        <Text
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          fontSize={0.25}
          color="#e0fbfc"
          maxWidth={6}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          {displayedSubtitle}
          <meshStandardMaterial emissive="#e0fbfc" emissiveIntensity={0.2} toneMapped={false} />
        </Text>
      </group>
    </Float>
  );
};
