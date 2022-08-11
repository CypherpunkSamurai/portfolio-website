import { Flex } from "@chakra-ui/react";
import VoxelWall3D from "./components/VoxelWall3D";


function App() {
  return (
    <Flex w={'100%'} height='500px' flexDirection={'column'} alignItems={'center'}>
        ThreeJS Test
        <VoxelWall3D />
    </Flex>
  );
}

export default App;
