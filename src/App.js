import './App.css';
import { Center, Icon, Box } from "@chakra-ui/react";
import { FaFire } from "react-icons/fa"
import Select from './components/select';
import InputOutput from './components/inputOutput';
import { useState } from "react";

function App() {
  const defaultCallback = (text) => {return 'callback not implemented'}
  const [callback, setCallback] = useState(() => defaultCallback)
  const [input, setInput] = useState('')
  return (
    <>
      <Fireline number={100}/>
      <Center fontSize="6xl">EPREUVE DU FEU</Center>
      <Center fontSize="2xl">coding accelerator</Center>
      <Fireline number={100}/>
      <br/>
      <Select setCallback={setCallback} setInput={setInput}/>
      <InputOutput callback={callback} value={input}/>
    </>
  );
}

const Fireline = ({ number }) => {
  return (
    <Box overflow="hidden" style={{whiteSpace: 'nowrap'}}>
      {[...Array(number)].map((x, i) => (
        <Icon key={i} as={FaFire} color="red.500" h="10" mr="5" />
      ))}
    </Box>
  );
};

export default App;
