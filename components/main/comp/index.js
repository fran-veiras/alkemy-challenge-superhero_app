import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

export const PowerStats = ({ title, totalPower }) => {
  return (
    <Box
      background="green.300"
      p={2}
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontSize="xl" fontWeight="bold" color="#fff">
        Team: {title}
      </Text>
      <Box
        height="50px"
        width="50px"
        background="#fff"
        borderRadius="9999px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          height="46px"
          width="46px"
          background="green.300"
          borderRadius="9999px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="#fff">{totalPower}</Text>
        </Box>
      </Box>
    </Box>
  );
};
