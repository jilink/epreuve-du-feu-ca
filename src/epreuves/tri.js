const tri = (input = "test") => {
  const values = input.split(" ");

  values.shift();

  let changed = false;

  values.forEach((value, index) => (values[index] = parseInt(value)));

  do {
    changed = false;
    for (let i = 0; i < values.length - 1; i++) {
      if (values[i] > values[i + 1]) {
        const tmp = values[i];
        values[i] = values[i + 1];
        values[i + 1] = tmp;
        changed = true;
      }
    }
  } while (changed);

  return values.join(" ");
};

export default tri;
