import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { getHeroesIds } from '../../../axios/heroAxios';
import { PowerStats } from '../comp';
import { Cards } from './Cards';

export const HeroTeam = ({ title, ids, totalPower, newTeams, setNewTeams }) => {
  useEffect(() => {
    typeof localStorage !== 'undefined' &&
      setNewTeams(JSON.parse(localStorage.getItem('teams')));
  }, []);

  function deleteItem() {
    setNewTeams((item) => item.filter((item) => item.teamName !== title));
  }

  useEffect(() => {
    newTeams.length !== 0 &&
      localStorage.setItem('teams', JSON.stringify(newTeams));
  }, [newTeams]);

  return (
    <Flex flexDir="column" my={5} background="green.300" p={3}>
      <PowerStats totalPower={totalPower} title={title} />
      <Box display="flex" flexDir="row" gridGap={2}>
        {ids.map((cat) => (
          <Cards
            key={cat.id}
            image={cat.image}
            name={cat.name}
            appearance={cat.appearance}
            work={cat.work.base}
            alias={cat.biography.aliases}
            totalPower={totalPower}
          />
        ))}
      </Box>
      <Box textAlign="end">
        <Button onClick={deleteItem}>Delete</Button>
      </Box>
    </Flex>
  );
};
