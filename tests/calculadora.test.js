const calculator = require("../models/calculadora");

test("Somar 2 + 2 deveria retornar 4", () => {
  const result = calculator.somar(2, 2);
  expect(result).toBe(4);
});

test("Somar 5 + 100 deveria retornar 105", () => {
  const result = calculator.somar(5, 100);
  expect(result).toBe(105);
});

test("Somar 'banana' + 100 deveria retornar 'Erro", () => {
  const result = calculator.somar(5, 100);
  expect(result).toBe(105);
});
