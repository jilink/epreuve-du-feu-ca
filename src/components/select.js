import React from "react";
import { Select as Choose } from "@chakra-ui/react";
import escalier from "../epreuves/escalier";

const functionDic = {
  'escalier': escalier
}

const Select = ({ setCallback, setInput }) => {
  const onChange = (e) => {
    setCallback(() => functionDic[e.target.value])
    setInput(`./${e.target.value} `)
  };

  return (
    <div>
      <Choose onChange={onChange} placeholder="Choisissez une épreuve">
        <option value='escalier'>Escalier</option>
        <option>Majuscule</option>
        <option>Factoriel en récursif</option>
        <option>Tri</option>
        <option>Rectangle</option>
        <option>Anagrammes</option>
        <option>Sudoku</option>
        <option>Factoriel, le retour</option>
      </Choose>
    </div>
  );
};

export default Select;
