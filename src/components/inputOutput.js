import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";

const InputOutput = ({
  placeholder = "Write some text",
  value = "",
  callback = (text) => {
    return text;
  },
}) => {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState(value);

  useEffect(() => {
    setInput(value);
  }, [value]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onExecute = (e) => {
    e.preventDefault();
    setOutput(callback(input));
  };
  return (
    <Box>
        <form onSubmit={onExecute}>
      <Flex m='2'>
          <Input onChange={onChange} value={input} placeholder={placeholder} mr="2" />
          <Button type="submit" colorScheme="blue">
            Execute
          </Button>
      </Flex>
        </form>
      <Text p='2' m='2' minH='50px' border="1px" style={{ whiteSpace: "pre-line" }}>
        {output}
      </Text>
    </Box>
  );
};

export default InputOutput;
