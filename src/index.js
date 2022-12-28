const calc = (a, b, action) => {
  switch (action) {
    case "Добавить":
      return a + b;
    case "Вычесть":
      return a - b < 0 ? 0 : a - b;
  }
};
