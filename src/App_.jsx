import "./App.css";
// import logo from './logo.svg';


// Chakra UI
import { Flex } from '@chakra-ui/react';
import AppHeader from "./components/AppHeader";

// Load Config
import Contacts from "./components/Contacts";
import Introduction from "./components/Introduction";
import VoxelWall3D from "./components/VoxelWall3D";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader />
      </header>

      <body>


        <Flex width={'inherit'} alignItems={'center'} flexDirection={'column'} my={'33px'}>
          <VoxelWall3D />
          <Introduction />
          <Contacts />
        </Flex>



      </body>

    </div>
  );
}

export default App;
