/* eslint-disable @next/next/no-html-link-for-pages */
import { Box, Divider, Flex, Square, Text } from '@chakra-ui/layout';
import React from 'react';

export const NavBar = () => {
  return (
    <Box
      w="full"
      background="green.300"
      boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.2)"
    >
      <Flex
        width={{
          base: '100vw', // 0-48em
          md: '80vw', // 48em-80em,
          xl: '80vw', // 80em+
          '2xl': '65vw',
        }}
        justifyContent="space-between"
        position="sticky"
        top="0"
        margin="0 auto"
        p={5}
      >
        <Square gridGap={5}>
          <Box>
            <a href="/">
              <Text cursor="pointer">Home</Text>
            </a>
          </Box>
          <Box>
            <Text cursor="pointer">Searcher</Text>
          </Box>
        </Square>
        <Square>
          <Box>
            <a href="/newteam">
              <Text cursor="pointer">Create New Team +</Text>
            </a>
          </Box>
        </Square>
      </Flex>
    </Box>
  );
};
