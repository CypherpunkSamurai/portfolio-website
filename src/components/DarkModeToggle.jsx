import React from 'react'
import { Box, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function DarkModeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
      <>
        <Box bg='blackAlpha.200' borderRadius={'md'}>
            <IconButton 
                icon={colorMode==='light'? <MoonIcon /> : <SunIcon />}
                variant="ghost"
                onClick={toggleColorMode} />
        </Box>
      </>      
    );
}
