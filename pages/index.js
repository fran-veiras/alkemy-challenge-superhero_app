import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { NavBar } from '../components/navBar';
import { Container, Flex, Heading, Text } from '@chakra-ui/layout';
import { HeroTeam } from '../components/main/HeroTeam';

export default function Home() {
  const route = useRouter();
  const [teams, setTeams] = useState([]);
  const [newTeams, setNewTeams] = useState(null);

  useEffect(() => {
    typeof localStorage !== 'undefined' &&
      localStorage.getItem('token') === null &&
      route.replace('/login');

    if (typeof localStorage !== 'undefined') {
      const res = JSON.parse(localStorage.getItem('teams'));

      setTeams(res);
    }
  }, [, newTeams]);

  return (
    <>
      <NavBar />
      <Head>
        <title>Superhero App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        maxWidth={{
          base: '100vw', // 0-48em
          md: '80vw', // 48em-80em,
          xl: '80vw', // 80em+
          '2xl': '65vw',
        }}
        p={5}
        justifyContent="center"
      >
        <Flex flexDir="column">
          <Heading>Teams</Heading>
          {teams === null && <Text>there are currently no teams created</Text>}
          {teams !== null &&
            teams !== undefined &&
            teams.map((cat) => (
              <HeroTeam
                key={cat.teamName}
                title={cat.teamName}
                ids={cat.ids}
                totalPower={cat.totalPower}
                setNewTeams={setNewTeams}
                newTeams={newTeams}
              />
            ))}
        </Flex>
      </Container>
    </>
  );
}
