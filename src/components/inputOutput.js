import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
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
    setInput(value)
  }, [value])

  const onChange = (e) => {
    setInput(e.target.value)
    console.log(callback)
  }

  const onExecute = (e) => {
    setOutput(callback(input))
  }
  return (
    <Box>
      <Input onChange={onChange} value={input} placeholder={placeholder} />
      <Button onClick={onExecute} colorScheme="blue">Execute</Button>
      <Text>{output}</Text>
    </Box>
  );
};

export default InputOutput;
