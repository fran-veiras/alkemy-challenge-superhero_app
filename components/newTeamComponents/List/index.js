import { CloseIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Box, Center, Divider, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';

export const CurrentList = (props) => {
  const { id, name, img, setIds, val, ids, setNumbers, powerstats } = props;

  const [deleteOn, setDeleteOn] = useState(false);

  const togglerDelete = () => {
    if (deleteOn === false) {
      setDeleteOn(!false);
    } else if (deleteOn === true) {
      setDeleteOn(!true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      deleteOn === true && setDeleteOn(!true);
    }, 10000);
  }, [deleteOn]);

  const deleteItemCurrentList = () => {
    setIds(ids.filter((cat) => cat.id !== id));
  };

  return (
    <Box
      p={3}
      display="flex"
      flexDir="row"
      zIndex="9999"
      justifyContent="center"
      alignItems="center"
      gridGap={2}
      _hover={{
        background: 'green.300',
      }}
      transition="ease 0.3s"
      cursor="pointer"
      onClick={togglerDelete}
    >
      <Text>{name}</Text>
      <Box
        width="40px"
        height="40px"
        borderRadius="9999px"
        backgroundImage={`${img}`}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        {deleteOn === true && (
          <Box
            width="40px"
            height="40px"
            borderRadius="9999px"
            background="rgba(0, 0, 0, 0.4)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="ease 0.3s"
            zIndex="9999"
            onClick={deleteItemCurrentList}
          >
            <CloseIcon w={4} h={4} color="green.300" />
          </Box>
        )}
      </Box>
    </Box>
  );
};
