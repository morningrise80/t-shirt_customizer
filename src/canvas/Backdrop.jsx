import React, { useRef } from "react";
import {
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
} from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();

  return (
    <>
      <AccumulativeShadows
        ref={shadows}
        temporal
        frames={60}
        alphaTest={0.85}
        scale={22}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -0.14]} // slightly behind the model
      >
        <RandomizedLight
          amount={8}
          radius={7}
          intensity={0.5}
          ambient={0.25}
          position={[6, 6, -10]}
          bias={0.001}
        />
        <RandomizedLight
          amount={6}
          radius={5}
          intensity={0.35}
          ambient={0.3}
          position={[-6, 6, -8]}
          bias={0.001}
        />
      </AccumulativeShadows>

      <ContactShadows
        position={[0, -0.4, 0]} // was -0.35
        opacity={0.35}
        scale={10}
        blur={2.6}
        far={1.4}
        resolution={1024}
        frames={1}
      />
    </>
  );
};

export default Backdrop;
