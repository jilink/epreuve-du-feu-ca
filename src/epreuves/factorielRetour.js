const factorielRetour= (input = "test") => {
  const values = input.split(" ");
  let n = parseInt(values[1]);
  for (let i = n - 1; i > 1; i--) {
    n *= i;
  }

  return n.toLocaleString();
};

export default factorielRetour;
