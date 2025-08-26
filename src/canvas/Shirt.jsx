// src/canvas/Shirt.jsx
import React, { useRef, useEffect } from "react";
import { useSnapshot } from "valtio";
import { useGLTF, useTexture, Decal } from "@react-three/drei";
import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb"); // keep GLB in /public

  // Load textures only if we actually have URLs
  const logoTexture = snap.logoDecal ? useTexture(snap.logoDecal) : null;
  const fullTexture = snap.fullDecal ? useTexture(snap.fullDecal) : null;

  // The Decal target
  const meshRef = useRef();

  // If textures exist, you can set anisotropy safely here (NOT in JSX)
  useEffect(() => {
    if (logoTexture) logoTexture.anisotropy = 16;
    if (fullTexture) fullTexture.anisotropy = 16;
  }, [logoTexture, fullTexture]);

  return (
    <mesh
      ref={meshRef}
      castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      material-color={snap.color}
      dispose={null}
    >
      {/* Full-surface decal */}
      {snap.isFullTexture && fullTexture && (
        <Decal
          mesh={meshRef} // ← explicit target avoids parent error
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={1}
          map={fullTexture}
        />
      )}

      {/* Small logo decal */}
      {snap.isLogoTexture && logoTexture && (
        <Decal
          mesh={meshRef}
          position={[0, 0.04, 0.15]}
          rotation={[0, 0, 0]}
          scale={0.15}
          map={logoTexture}
          depthTest={false}
          depthWrite
        />
      )}
    </mesh>
  );
};

useGLTF.preload("/shirt_baked.glb");
export default Shirt;
