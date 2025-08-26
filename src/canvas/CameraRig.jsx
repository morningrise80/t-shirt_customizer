import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";

const CameraRig = ({ children }) => {
  const group = useRef();
  const { camera, pointer, viewport } = useThree();

  useFrame((r3f, delta) => {
    // Always look straight at the origin
    const camTarget = [0, -0.005, 1.9]; // a touch closer than 2.2 so it feels centered & larger
    easing.damp3(camera.position, camTarget, 0.25, delta);
    camera.lookAt(0, 0, 0);

    if (group.current) {
      // Keep the model at the origin, nudge down a hair so collar isn't too high
      easing.damp3(group.current.position, [0, -0.02, 0], 0.25, delta);

      // Pointer parallax (keeps your nice “alive” feel)
      easing.dampE(
        group.current.rotation,
        [r3f.pointer.y / 10, -r3f.pointer.x / 5, 0],
        0.25,
        delta
      );

      // Scale responsively based on viewport width so the tee “fills” more of the page
      const vw = viewport.width;
      const s =
        vw < 6
          ? 1.25 // phones
          : vw < 9
          ? 1.18 // small tablets
          : 1.12; // desktop
      easing.damp3(group.current.scale, [s, s, s], 0.25, delta);
    }
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
