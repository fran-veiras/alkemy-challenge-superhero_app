import { Box, Container, Flex, Heading, VStack } from '@chakra-ui/layout';
import Head from 'next/head';
import { BoxLeft } from '../../components/login/boxLeft';
import { BoxRight } from '../../components/login/boxRight';

export default function login() {
  return (
    <Container
      minW="100vw"
      height="100vh"
      py={20}
      overflow="hidden"
      background="green.100"
      display="flex"
      alignItems="center"
    >
      <Head>
        <title>Login - Superhero</title>
        <meta name="Login - Superhero" content="Login - Superhero" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        height={{
          base: '90vh', // 0-48em
          md: 'full', // 48em-80em,
          xl: 'full', // 80em+
          '2xl': '70vh',
        }}
        margin="0 auto"
        maxWidth={{
          base: '100vw', // 0-48em
          md: '80vw', // 48em-80em,
          xl: '80vw', // 80em+
          '2xl': '65vw',
        }}
        boxShadow="0px 0px 16px 0px rgba(0, 0, 0, 0.3) "
        flexDirection={{
          base: 'column', // 0-48em
          md: 'row', // 48em-80em,
          xl: 'row', // 80em+
          '2xl': 'row',
        }}
      >
        <BoxLeft />
        <BoxRight />
      </Flex>
    </Container>
  );
}
