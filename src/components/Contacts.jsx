import React from 'react'

// Configs
import UserData from '../config';

// ChakraUI
import { Flex, Text, IconButton, Grid, Link, GridItem } from '@chakra-ui/react';
// React Icons
import { DiGithubAlt } from 'react-icons/di';
import { ImLinkedin2 } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';
import { SiHashnode } from 'react-icons/si';


// Contacts React Section
export default function Contacts() {
  return (
    <Flex as='div' mt={'2rem'} w='55%' flexDirection={'column'} alignItems={'center'} gap='1rem'>
      <Grid gap={'1rem'}>
        <GridItem>
          <Flex flexDirection={'row'} alignItems={'center'} gap={'10px'}>
            <Link href={"https://github.com/" + UserData['github']}>
              <IconButton><DiGithubAlt></DiGithubAlt></IconButton>
            </Link>
            <Link href={"https://github.com/" + UserData['github']}>
              <Text as='b'>Github</Text>
            </Link>
            {console.log(UserData['github'])}

          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexDirection={'row'} alignItems={'center'} gap={'10px'}>
            <Link href={"https://" + UserData['hashnode'] + ".hashnode.com/"}>
              <IconButton><SiHashnode></SiHashnode></IconButton>
            </Link>
            <Link href={"https://" + UserData['hashnode'] + ".hashnode.dev/"}>
              <Text as='b'>HashNode</Text>
            </Link>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexDirection={'row'} alignItems={'center'} gap={'10px'}>
            <Link href={"https://www.linkedin.com/" + UserData['linkedin']}>
              <IconButton><ImLinkedin2></ImLinkedin2></IconButton>
            </Link>
            <Link href={"https://www.linkedin.com/" + UserData['linkedin']}>
              <Text as='b'>LinkedIn</Text>
            </Link>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexDirection={'row'} alignItems={'center'} gap={'10px'}>
            <Link href={"mailto:" + UserData['email']}>
              <IconButton><HiOutlineMail></HiOutlineMail></IconButton>
            </Link>
            <Link href={"mailto:" + UserData['email']}>
              <Text as='b'>Mail Me</Text>
            </Link>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  )
}
