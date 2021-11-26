import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
} from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { getHeroe } from '../../axios/heroAxios';
import { Request } from '../../components/newTeamComponents/requestComponent';
import { Heroes } from '../../components/newTeamComponents/Heroes';
import { NavBar } from '../../components/navBar';
import { Input } from '@chakra-ui/input';
import { useRouter } from 'next/dist/client/router';
import { CurrentList } from '../../components/newTeamComponents/List';

export default function Newteam() {
  const route = useRouter();
  const [popUp, setPopUp] = useState(false);
  const [name, setName] = useState([]);
  const [heroes, setHeroes] = useState(null);
  const [ids, setIds] = useState([]);
  const [teamName, setTeamName] = useState(null);
  // totalPowerStats

  const [power, setPower] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [values, setValues] = useState([]);
  const [totalPower, setTotalPower] = useState([]);

  useEffect(() => {
    ids !== null &&
      ids.length === 6 &&
      ids.map((val) => {
        setPower((cat) => [
          ...cat,
          val.powerstats.intelligence,
          val.powerstats.durability,
          val.powerstats.combat,
          val.powerstats.power,
          val.powerstats.speed,
          val.powerstats.strength,
        ]);
      });
  }, [ids]);

  useEffect(() => {
    const res = power.filter(Number);
    res.map((val) => {
      setValues((cat) => [...cat, parseInt(val, 10)]);
    });
  }, [power]);

  useEffect(() => {
    const sumValues = values !== null && values.reduce((a, b) => a + b, 0);
    setTotalPower(sumValues);
  }, [values]);

  useEffect(() => {
    (ids !== null) & (ids.length === 6) & (totalPower !== 0) && saveTeamValue();
  }, [totalPower]);

  useEffect(() => {
    getHeroe(name).then((res) => {
      setHeroes(res);
    });
  }, [name]);

  const getTeams = () => {
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem('teams') !== undefined
    ) {
      return JSON.parse(localStorage.getItem('teams'));
    } else {
      return;
    }
  };

  const [saveTeam, setSaveTeam] = useState(getTeams());

  const saveTeamValue = () => {
    var p1 = new Promise(function (res, rej) {
      if (saveTeam !== null) {
        res(
          setSaveTeam((cat) => [
            ...cat,
            { teamName: teamName, ids: ids, totalPower: totalPower },
          ])
        );
      } else {
        res(
          setSaveTeam([
            { teamName: teamName, ids: ids, totalPower: totalPower },
          ])
        );
      }
    });

    p1.then(function () {
      setIds('') & route.replace('/');
    });
  };

  useEffect(() => {
    localStorage.setItem('teams', JSON.stringify(saveTeam));
  }, [saveTeam]);

  useEffect(() => {
    popUp === false && setPopUp(!false);
  }, []);

  const handlerName = (e) => {
    setTeamName(e.target.value);
  };

  const closeInputTeam = (e) => {
    e.key === 'Enter' && setPopUp(!true);
  };

  return (
    <>
      <NavBar />
      <Container
        minH="100vh"
        minW={{
          base: '100vw', // 0-48em
          md: '80vw', // 48em-80em,
          xl: '80vw', // 80em+
          '2xl': '65vw',
        }}
        py={20}
        display="flex"
        alignItems="center"
      >
        <Box display="flex" flexDir="column" gridGap={5} w="full">
          <Flex gridGap={5}>
            <Box background="green.400">
              <Divider width="3px" orientation="vertical" />
            </Box>
            <Box>
              <Heading>The Adventure Is Beginning.</Heading>
              <Heading>Search And Add Your Superheroes.</Heading>
            </Box>
          </Flex>
          <Flex gridGap={5}>
            <Box background="green.400">
              <Divider width="3px" orientation="vertical" />
            </Box>
            <Box>
              <Text fontSize="xl" fontWeight="medium">
                Search and select three heroes with good orientation and select
                three with bad orientation
              </Text>
            </Box>
          </Flex>
          <Request setName={setName} />
          <Grid gridGap={5} gridTemplateColumns="repeat(5, 1fr)">
            {heroes !== null &&
              heroes !== undefined &&
              heroes.map((cat) => (
                <Heroes
                  ids={ids}
                  setIds={setIds}
                  id={cat.id}
                  key={cat.id}
                  image={cat.image}
                  name={cat.name}
                  hero={cat}
                  orientation={cat.biography.alignment}
                />
              ))}
          </Grid>
        </Box>
        {popUp === true && (
          <Flex
            position="absolute"
            left="0"
            bottom="0"
            width="full"
            height="100vh"
            background="rgba(0, 0, 0, 0.8)"
            alignItems="center"
            justifyContent="center"
            zIndex="9999"
          >
            <Box
              minW="300px"
              background="#fff"
              p={8}
              alignItems="center"
              justifyContent="center"
              display="flex"
              borderRadius="7px"
              flexDir="column"
              gridGap={5}
            >
              <Heading>Team name</Heading>
              <Input
                value={teamName}
                onChange={handlerName}
                onKeyPress={closeInputTeam}
              />
            </Box>
          </Flex>
        )}
        <Flex
          flexDir="row"
          background="green.100"
          position="fixed"
          bottom="0"
          right="0"
          width="full"
          boxShadow="md"
          alignItems="center"
          overflowX="scroll"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <Text my={1} fontSize="md" fontWeight="bold" color="#000" p={3}>
            Your Current Team
          </Text>
          <Center background="green.300" height="40px" width="2px">
            <Divider orientation="vertical" />
          </Center>
          <Box display="flex" flexDir="row" alignItems="center">
            {ids !== null &&
              ids !== undefined &&
              ids.length !== 0 &&
              ids.map((val) => (
                <>
                  <CurrentList
                    key={val.id}
                    id={val.id}
                    name={val.name}
                    img={val.image.url}
                    setIds={setIds}
                    ids={ids}
                    val={val}
                  />
                  <Center background="green.300" height="40px" width="1px">
                    <Divider orientation="vertical" />
                  </Center>
                </>
              ))}
          </Box>
        </Flex>
      </Container>
    </>
  );
}
