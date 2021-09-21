import React from "react";
import { Select as Choose } from "@chakra-ui/react";
import escalier from "../epreuves/escalier";
import majuscule from "../epreuves/majuscule";
import factoriel from "../epreuves/factoriel";
import tri from "../epreuves/tri";

const functionDic = {
  'escalier': escalier,
  'majuscule': majuscule,
  'factoriel': factoriel,
  'tri': tri,
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
        <option value='majuscule'>Majuscule</option>
        <option value='factoriel'>Factoriel en récursif</option>
        <option value='tri'>Tri</option>
        <option>Rectangle</option>
        <option>Anagrammes</option>
        <option>Sudoku</option>
        <option>Factoriel, le retour</option>
      </Choose>
    </div>
  );
};

export default Select;
