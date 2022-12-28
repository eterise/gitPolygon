const calc = (a, b, action) => {
  if (typeof a != "number" || typeof b != "number") return;

  switch (action) {
    case "Добавить":
      return a + b;
    case "Вычесть":
      return a - b < 0 ? 0 : a - b;
    case "Умножить":
      return a * b;
  }
};
