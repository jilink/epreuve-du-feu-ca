const majuscule = (input = "test") => {
  const values = input.split('"');
  if (values.length < 2) return "remember to user \"\""
  let str = values[1];
  let strArray = str.split("");

  for (let i = 0; i < strArray.length; i++) {
    if (i % 2) {
      strArray[i] = strArray[i].toUpperCase();
      continue;
    }
    strArray[i] = strArray[i].toLowerCase();
  }

  str = strArray.join("");

  return str;
};

export default majuscule;
