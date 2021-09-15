import './App.css';
import { Text, Icon, Box } from "@chakra-ui/react";
import { FaFire } from "react-icons/fa"

function App() {
  return (
    <>
      <Fireline number={100}/>
      <Text fontSize="6xl">EPREUVE DU FEU</Text>
      <Text fontSize="2xl">coding accelerator</Text>
      <Fireline number={100}/>
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
