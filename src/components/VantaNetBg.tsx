import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// @ts-ignore
import NET from "vanta/dist/vanta.net.min";


export const VantaNetBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        showDots:true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0a0a0a,
        color: 0xff3f81,
        points: 10.0,
        maxDistance: 25.0,
        spacing: 20.0,
      });

      setVantaEffect(effect);
    }

    return () => {
      vantaEffect?.destroy?.();
    };
  }, [vantaEffect]);

// useEffect(() => {
//   if (!vantaEffect && vantaRef.current) {
//     const effect = NET({
//       el: vantaRef.current,
//       THREE,
//       mouseControls: true,
//       touchControls: true,
//       gyroControls: false,
//       minHeight: 200.0,
//       minWidth: 200.0,
//       scale: 1.0,
//       scaleMobile: 1.0,
//       backgroundColor: 0x0a0a0a,
//       color: 0x0000ff, // Blue
//       points: 10.0,
//       maxDistance: 25.0,
//       spacing: 15.0,
//     });

//     setVantaEffect(effect);
//   } else if (vantaEffect) {
//     // Dynamically update color
//     vantaEffect.setOptions({ color: 0x0000ff });
//   }

//   return () => {
//     vantaEffect?.destroy?.();
//   };
// }, [vantaEffect, vantaRef.current]);

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
};
