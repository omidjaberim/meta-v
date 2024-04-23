"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";
import { useRef } from "react";

function MeshComponent(props:{fileUrl:string}) {
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, props.fileUrl);
    useFrame(() => {
        mesh.current.rotation.y += 0.01;
      });
  
    return (
      <mesh ref={mesh}>
        <primitive object={gltf.scene} />
      </mesh>
    );
}

const ThreeDMesh =(props:{fileUrl:string})=> {

  return (
        // <Canvas orthographic camera={{ zoom: 210, position: [90,-20,20] }} className="rotate-45 transform  w-full " style={{transformOrigin:" -22% 28%"}} >
        <Canvas orthographic camera={{ zoom: 160, position: [90,-2,20] }}  >
            <OrbitControls />                                    
            <ambientLight  intensity={1}   />
            <pointLight  position={[10, 10, 10]} />
            <MeshComponent fileUrl={props.fileUrl} />
        </Canvas>
  );
}
export default ThreeDMesh