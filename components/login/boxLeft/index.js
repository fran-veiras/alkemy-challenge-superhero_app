import { Img } from '@chakra-ui/image';
import { Box, Divider, Flex, Heading } from '@chakra-ui/layout';
import React from 'react';

export const BoxLeft = () => {
  return (
    <Flex
      flex="1"
      flexDir="column"
      background="green.300"
      position="relative"
      overflow="hidden"
      p={4}
    >
      <Flex gridGap={5} zIndex="9999">
        <Box background="#fff">
          <Divider width="3px" orientation="vertical" />
        </Box>
        <Box>
          <Heading>Welcome,</Heading>
          <Heading>Are You Ready For The Adventure?</Heading>
        </Box>
      </Flex>

      <Img
        animation="ease-in 2s "
        src="/login/heros.png"
        position="absolute"
        left="0"
        bottom="0"
        width="600px"
        opacity="0.2"
        filter="sepia(100%)"
      />
    </Flex>
  );
};
