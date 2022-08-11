import React from 'react'

// Chakra UI
import { Flex, Box, Image, useColorMode } from '@chakra-ui/react'


export default function ThreeJSWall() {
  // ColorMode
  const { colorMode } = useColorMode();
  //
  const bgColor = {
    'light': 'gray.100',
    'dark':  'whiteAlpha.500',
  }
  return (
    <>
        <Flex borderRadius={'5px'} flexDirection='column' alignItems={'center'} color={bgColor[!colorMode]} p='5px' maxW={['80%','60%']} my={'15px'}>
            <Box overflow='hidden' borderRadius={'lg'}>
            <Image src="https://www.blendernation.com/wp-content/uploads/2016/02/JapaneseVoxelGarden_1.jpg"/>
            </Box>
        </Flex>
    </>
  )
}
