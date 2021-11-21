import { Box } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export const Request = ({ setIds }) => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    setIds(value);
  }, [value]);

  const handlerValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box>
      <Input value={value} onChange={handlerValue} />
    </Box>
  );
};
