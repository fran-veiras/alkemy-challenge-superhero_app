import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { Image } from '@chakra-ui/image';
import { Box, Flex, GridItem, Heading, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';

export const Heroes = (props) => {
  const { name, image, orientation, setIds, hero, ids, align, setAlign } =
    props;

  const rest = ids.map((val) => val.biography.alignment);

  const arr = rest.reduce(
    (map, word) => ({ ...map, [word]: (map[word] || 0) + 1 }),
    { good: 0, bad: 0 }
  );

  const saveIds = () => {
    if (ids.length === 0) {
      setIds((cat) => [...cat, hero]);
      setAlign((cat) => [...cat, [hero.biography.alignment]]);
    } else if (ids.includes(hero)) {
      return;
    } else {
      if (
        (ids.length > 0) &
        (hero.biography.alignment === 'good') &
        (arr.good < 3)
      ) {
        setAlign((cat) => [...cat, [hero.biography.alignment]]);
        setIds((cat) => [...cat, hero]);
      }

      if (
        (ids.length > 0) &
        (hero.biography.alignment === 'bad') &
        (arr.bad < 3)
      ) {
        setAlign((cat) => [...cat, [hero.biography.alignment]]);
        setIds((cat) => [...cat, hero]);
      }
    }
  };

  return (
    <GridItem background="#fff" position="relative">
      <Flex h="full">
        <Button
          position="absolute"
          fontSize=""
          bottom="5px"
          right="5px"
          onClick={saveIds}
        >
          Add Hero
        </Button>
        <Accordion allowMultiple position="absolute" width="full">
          <AccordionItem background="#fff">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Info
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Box>
                <Heading display="inline" fontSize="xl">
                  Name:{' '}
                  <Heading display="inline" fontSize="xl" color="green.300">
                    {name}
                  </Heading>
                </Heading>
              </Box>
              <Box>
                <Text fontSize="medium" display="inline">
                  Orientation:{' '}
                  <Text display="inline" fontSize="medium" color="green.300">
                    {orientation}
                  </Text>
                </Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Image flexWrap="wrap" alt="heroe" src={image.url} />
      </Flex>
    </GridItem>
  );
};
