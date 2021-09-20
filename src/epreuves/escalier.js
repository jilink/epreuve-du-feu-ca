const escalier = (input = "test") => {
  const values = input.split(" ");
  const n = parseInt(values[1]);
  let str = "";
  for (let i = 0; i<n; i++) {
    for (let j=0; j<i; j++) {
      str+='#'
    }
    str+='#\n'
  }

  return str;
};

export default escalier;
