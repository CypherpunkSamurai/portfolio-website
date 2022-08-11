import React from 'react';
import { Box, Button, Flex, Spacer, Text, useColorMode } from '@chakra-ui/react';

// Custom Components Here
import DarkModeToggle from './DarkModeToggle';

export default function AppHeader() {
  // ColorMode
  const { colorMode, _ } = useColorMode();
  // Button Colors
  const bgColor = {
    'light': 'BlackAlpha.100',
    'dark': 'BlackAlpha.100',
  }
  const buttonBgColor = {
    'light': 'BlackAlpha.100',
    'dark': 'BlackAlpha.100',
  }
  const textColor = {
    'light': 'WhiteAlpha.400',
    'dark': 'BlackAlpha.300',
  }
  return (
    <>
      
      <Flex width={'100%'} as='nav' position={'fixed'} zIndex={'10'} mx='0' top={'-10px'} flexDirection={'column'} alignItems={'center'}>
        
        <Flex
          width={['60%', '50%']}
          //
          mx={'auto'}
          p={[2,3,3]}
          borderRadius={'10px'}
          bg={'blackAlpha.100'}
          backdropFilter="saturate(180%) blur(5px)"
          //
          overflow='hidden'
          align='center'>
          <Flex
            mt={'2'}
            width={'100%'}>
            <Box bg={textColor[colorMode]} borderRadius={'2px'}>
              <Button as={'a'} p={[1,2,4]}  variant={'ghost'} bg={'whiteAlpha.100'} href="/">
                <Text color={textColor[colorMode]}>Home</Text>
              </Button>
            </Box>
            <Spacer />
            <DarkModeToggle />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
