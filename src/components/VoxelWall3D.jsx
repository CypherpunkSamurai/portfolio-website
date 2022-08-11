import { Canvas, useThree } from "@react-three/fiber";
import { useLoader, useFrame  } from "@react-three/fiber";
import { PerspectiveCamera, PresentationControls, Environment, OrbitControls, SpotLight, Center } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";

import * as THREE from 'three';


const Model = () => {
    // Load Model
    const gltf = useLoader(GLTFLoader, "./3d/sakura.gltf");
    // Animation
    const {gl, camera } = useThree();
    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        //_3DObject.current.rotation.y = a;
        console.log(camera.toJSON());
    });
    // 
    
    return (
      <>
        <Center alignTop>
            <primitive visible rotation={[0, 0, 0]} object={gltf.scene} />
        </Center>
      </>
    );
  };
  
  export default function VoxelWall3D() {
    return (
      <div className="3D" width="100%" height="100%">
        <Canvas onCreated={state => {state.camera.lookAt(0, 0, 0)}}>
                <PerspectiveCamera lookAt={[0,0,0]} />
                <ambientLight />
                    <spotLight
                    position={[-5, -5, 0]}
                    angle={Math.PI / 6}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    castShadow
                    />    
                    <Model />
            <OrbitControls autoRotateSpeed={'5'} autoRotate={true} maxDistance={8} minPolarAngle={'0.7'} maxPolarAngle={'0.9'} enableDamping />
        </Canvas>
      </div>
    );
  }