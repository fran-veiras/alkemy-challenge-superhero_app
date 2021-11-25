import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, GridItem, Heading, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';

export const Cards = (props) => {
  const {
    image,
    name,
    powerstats,
    appearance,
    work,
    alias,
    setNumbers,
    numbers,
  } = props;

  useEffect(() => {
    numbers.length === 0 &&
      setNumbers((cat) => [
        ...cat,
        powerstats.intelligence,
        powerstats.durability,
        powerstats.combat,
        powerstats.power,
        powerstats.speed,
        powerstats.strength,
      ]);
  }, []);

  return (
    <GridItem background="green.100" position="relative">
      <Flex h="full">
        <Accordion
          allowMultiple
          position="absolute"
          zIndex="9998"
          width="full"
          maxHeight="full"
          overflowY="scroll"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <AccordionItem background="#fff">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Info
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Box>
                <Text fontSize="medium" display="inline">
                  Weight & height:{' '}
                  <Text display="inline" fontSize="medium" color="green.300">
                    {appearance.weight} & {appearance.height}
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text fontSize="medium" display="inline">
                  Aliases:{' '}
                  <Text display="inline" fontSize="medium" color="green.300">
                    {alias}
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text fontSize="medium" display="inline">
                  Eye color:{' '}
                  <Text display="inline" fontSize="medium" color="green.300">
                    {appearance['eye-color']}
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text fontSize="medium" display="inline">
                  Hair color:{' '}
                  <Text display="inline" fontSize="medium" color="green.300">
                    {appearance['hair-color']}
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text fontSize="medium" display="inline">
                  Work:{' '}
                  <Text display="inline" fontSize="medium" color="green.300">
                    {work}
                  </Text>
                </Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Flex
          flexDir="column"
          textAlign="center"
          justifyContent="space-between"
        >
          <Image flexWrap="wrap" alt="heroe" src={image.url} />
          <Text display="inline" fontSize="medium" color="#000">
            {name}
          </Text>
          <Button>Delete</Button>
        </Flex>
      </Flex>
    </GridItem>
  );
};
