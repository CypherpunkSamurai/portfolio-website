import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Center } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import * as THREE from 'three';

// Chakra UI
import { Flex } from '@chakra-ui/react'

const Model = () => {
    // Load Model
    const gltf = useLoader(GLTFLoader, "./3d/sakura.gltf");
    return (
        <>
            <Center alignTop>
                <primitive visible object={gltf.scene} position={[-6, -4, 6]} />
            </Center>
        </>
    );
};

// Functions
function _CanvasScene() {
    // const control = useRef();
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       console.log(control)
    //     }, 2000)
    // });
    // change the orbital control z
    return (
        <Canvas width='100%' height='100%' onCreated={state => { state.camera.lookAt(0, 0, 0) }}>
            <PerspectiveCamera
                makeDefault
                far={2000}
                aspect={2.049719551282051}
                focus={35}
                //position={[9.808092764228105, 14.320364720193888, 11.444749575892155]} 
                position={[0, 0.560, -10.140]}
                near={0.1}
                zoom={0.90001}
                fov={60}
                rotation={new THREE.Euler(-0.7626463215081168, 0.07706874407002953, 0.07343410641566032)} />
            <ambientLight />
            <spotLight
                position={[-5, -5, 0]}
                angle={Math.PI / 6}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                castShadow
            />
            <Model />
            <OrbitControls autoRotateSpeed={'5'} autoRotate={true} maxDistance={'50'} minDistance={'20'} minPolarAngle={'0.5'} maxPolarAngle={'0.6'} enableDamping enableZoom />
        </Canvas>
    );
}

export default function VoxelWall3D() {
    return (
        <Flex borderRadius={'5px'} flexDirection='column' alignItems={'center'} p='5px' my={'15px'} bg='whiteAlpha.50' w='100%' h='100%'>
            <_CanvasScene />
        </Flex>
    )
}