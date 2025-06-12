// components/VantaBirdBg.tsx
import { useEffect, useRef } from "react";
import * as THREE from "three";

// @ts-ignore
import BIRDS from "vanta/dist/vanta.birds.min";

export const VantaBirdBg = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    if (vantaRef.current && !effectRef.current) {
      effectRef.current = BIRDS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0a0a0a,
        color1: 0xff00ff,
        color2: 0x00ffff,
        birdSize: 1.5,
        wingSpan: 20.0,
        speedLimit: 3.0,
        separation: 50.0,
        alignment: 50.0,
        cohesion: 50.0,
        quantity: 3.0,
      });
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
};
