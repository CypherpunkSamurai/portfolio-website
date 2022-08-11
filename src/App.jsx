import "./App.css";
// import logo from './logo.svg';


// Chakra UI
import { Link, Center, Flex, Box, Heading, Square, Spacer, VStack, Image, useColorMode, Text, IconButton } from '@chakra-ui/react';
import { LinkIcon } from "@chakra-ui/icons";
import AppHeader from "./components/AppHeader";


// React Icons
import { DiGithubAlt } from "react-icons/di";
import { SiHashnode } from 'react-icons/si';


// Load Config
import UserData from './config';


function App() {
  // ColorMode
  const { colorMode, toggleColorMode } = useColorMode();
  //
  const bgColor = {
    'light': 'gray.100',
    'dark':  'whiteAlpha.500',
  }
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader />
      </header>

      <body>

        {/* Content Here */}
        <VStack alignItems="center" width="full" justifyContent="center" borderColor="gray.500" spacing={'lg'} mt='5rem'>
            
            {/* <Box width={'90%'} maxWidth={['90%', '85%', '80%']} bg='grey' borderRadius={'2px'} px={'5px'}>
              <Heading as='h2'>
                Hello👋 I'm Rakesh Chowdhury
              </Heading>
            </Box> */}

            

            <Flex borderRadius={'5px'} flexDirection='column' alignItems={'center'} color={bgColor[!colorMode]} p='5px' maxW={['80%','60%']} my={'15px'}>
              <Box overflow='hidden'>
                <Image src="https://www.blendernation.com/wp-content/uploads/2016/02/JapaneseVoxelGarden_1.jpg"/>
              </Box>
            </Flex>
            <Flex>
              <Box textAlign={'center'}>
                <Heading>Hello👋 I'm {UserData['name']}</Heading>
                <Text as='b'>
                  I'm a {UserData['best-skill']} in the making...
                </Text>

                <Flex my={'2rem'} flexDirection={'column'}>
                  <Flex >
                    Test
                  </Flex>
                  <Flex >
                    Test
                  </Flex>
                </Flex>

              </Box>
            </Flex>
          
        </VStack>

      </body>
    </div>
  );
}

export default App;
