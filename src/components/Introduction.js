import React from 'react'

// Configs
import UserData from '../config'

// Chakra UI
import { Flex, Box, Text, Heading } from '@chakra-ui/react'

export default function Introduction() {
  return (
    <>
        <Flex>
            <Box textAlign={'center'}>
            <Heading>Hello👋 I'm {UserData['name']}</Heading>
            <Text as='b'>
                A {UserData['best-skill']} in the making...
            </Text>
            </Box>
        </Flex>

        <Flex my={'20px'} maxW={'65%'} justifyContent={'center'}>
            <p>
                I'm a Developer from <b>{UserData['location']}</b> and I'm currently studying in <b>{UserData['course-year']} {UserData['course']}</b>. I love reading books and browsing cat pictures.
            </p>
        </Flex>
    </>
  )
}
