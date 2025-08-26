// src/canvas/index.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 1.95], fov: 28 }} // slightly closer & a tad wider FOV
      gl={{ preserveDrawingBuffer: true }}
      className="fixed inset-0 h-full w-full z-0 transition-all ease-in"
    >
      <color attach="background" args={["#0e1014"]} />
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
