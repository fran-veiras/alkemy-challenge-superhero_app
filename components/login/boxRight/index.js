import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import Crossicon from '../../../public/login/crossicon';
import { useRouter } from 'next/dist/client/router';
import { login } from '../../../axios/heroAxios';

export const BoxRight = () => {
  const route = useRouter();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    typeof localStorage !== 'undefined' &&
      localStorage.getItem('token') !== null &&
      route.replace('/');
  }, []);

  const validate = (values) => {
    let errors = {};
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 2) {
      errors.password = 'Must be 2 characters or more';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const [token, setToken] = useState([]);

  function getToken(info) {
    login(info.email, info.password)
      .then((cat) => setToken(cat.message))
      .catch((err) => setToken(err));
  }

  useEffect(() => {
    token.token !== undefined &&
      localStorage.setItem('token', token.token) & route.replace('/');
  }, [token]);

  return (
    <Box
      flex={{
        base: '4', // 0-48em
        md: '1', // 48em-80em,
        xl: '1', // 80em+
        '2xl': '1',
      }}
      display="flex"
      alignItems="center"
      gridGap={5}
      justifyContent="center"
      background="#000"
    >
      <Flex
        p={8}
        h="full"
        flexDirection="column"
        justifyContent="center"
        borderRadius="7px"
        gridGap={5}
        maxWidth="500px"
        minWidth={{
          base: '100%', // 0-48em
          md: '100%', // 48em-80em,
          xl: '500px', // 80em+
          '2xl': '500px',
        }}
      >
        <Formik
          justifyContent="space-around"
          onSubmit={(values) => {
            setInfo(values);
            getToken(values);
          }}
          validate={(values) => validate(values)}
          initialValues={{
            email: '',
            password: '',
          }}
        >
          {({ values, handleSubmit, handleChange, handleBlur, errors }) => (
            <form onSubmit={handleSubmit}>
              <Heading textAlign="center" color="#fff">
                Login
              </Heading>
              <Box>
                <Input
                  _placeholder={{
                    color: '#fff',
                  }}
                  variant="flushed"
                  focusBorderColor="#000"
                  borderColor="#fff"
                  color="green.300"
                  type="email"
                  name="email"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  my={3}
                  padding={2}
                />
                {errors.email ? <Box color="#fff">{errors.email}</Box> : null}
              </Box>
              <Box>
                <Input
                  _placeholder={{
                    color: '#fff',
                  }}
                  fontSize
                  variant="flushed"
                  borderColor="#fff"
                  focusBorderColor="#000"
                  color="green.300"
                  type="password"
                  name="password"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="password"
                  my={3}
                  padding={2}
                />
                {errors.password ? (
                  <Box color="#fff">{errors.password}</Box>
                ) : null}
              </Box>
              <Button
                _hover={{
                  background: 'green.300',
                  color: '#fff',
                }}
                width="full"
                type="submit"
                my={3}
              >
                Log in
              </Button>
              {(info.email !== undefined) & (info.password !== undefined) &&
                token.error && (
                  <Flex alignItems="center" justifyContent="center" my={3}>
                    <Text textAlign="center" mr={2} color="green.300">
                      {token.error}
                    </Text>
                    <Crossicon />
                  </Flex>
                )}
            </form>
          )}
        </Formik>
      </Flex>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          height: 60%;
          justify-content: space-evenly;
        }
      `}</style>
    </Box>
  );
};
