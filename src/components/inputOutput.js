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
    setInput(value);
  }, [value]);

  const onChange = (e) => {
    setInput(e.target.value);
    console.log(callback);
  };

  const onExecute = (e) => {
    e.preventDefault();
    setOutput(callback(input));
  };
  return (
    <Box>
      <form onSubmit={onExecute}>
        <Input onChange={onChange} value={input} placeholder={placeholder} />
        <Button type='submit' colorScheme="blue">
          Execute
        </Button>
      </form>
      <Text style={{ whiteSpace: "pre-line" }}>{output}</Text>
    </Box>
  );
};

export default InputOutput;
