import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { getHeroesIds } from '../../../axios/heroAxios';
import { PowerStats } from '../comp';
import { Cards } from './Cards';

export const HeroTeam = ({ title, ids }) => {
  const [heroes, setHeroes] = useState([]);
  const [power, setPower] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [values, setValues] = useState([]);
  const [totalPower, setTotalPower] = useState([]);

  useEffect(() => {
    power.length === 0 &&
      ids.map((val) => {
        setPower((cat) => [...cat, val.powerstats]);
      });
  }, []);

  useEffect(() => {
    const res = numbers.filter(Number);
    values.length === 0 &&
      res.map(function (item) {
        setValues((cat) => [...cat, parseInt(item, 10)]);
      });
  }, [power]);

  useEffect(() => {
    const sumValues = values.reduce((a, b) => a + b, 0);
    setTotalPower(sumValues);
  }, [values]);

  return (
    <Flex flexDir="column" my={5}>
      <PowerStats totalPower={totalPower} title={title} />
      <Box display="flex" flexDir="row" gridGap={2}>
        {ids.map((cat) => (
          <Cards
            key={cat.id}
            image={cat.image}
            name={cat.name}
            powerstats={cat.powerstats}
            appearance={cat.appearance}
            work={cat.work.base}
            alias={cat.biography.aliases}
            setNumbers={setNumbers}
            numbers={numbers}
          />
        ))}
      </Box>
    </Flex>
  );
};
