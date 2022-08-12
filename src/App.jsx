import "./App.css";
// import logo from './logo.svg';

// Chakra UI
import { Flex, Box } from '@chakra-ui/react';

// Load Config
import Contacts from "./components/Contacts";
import Introduction from "./components/Introduction";
import VoxelWall3D from "./components/VoxelWall3D";


function App() {
  return (
    
    <div className="App">
      
      <body>


        <Flex width={'inherit'} alignItems={'center'} flexDirection={'column'} my={'33px'}>
          <Box w='85%' maxW={['80%', '60%']} h='400px'>
            <VoxelWall3D />
          </Box>
          <Introduction />
          <Contacts />
        </Flex>



      </body>
    </div>
  );
}

export default App;
