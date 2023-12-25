import { сценарий, Контекст } from "../src";

сценарий("сложение")
  .дано(ПервыйАргументРавен, 1)
  .и(ВторойАргументРавен, 2)
  .когда(Складываю)
  .тогда(РезультатРавен, 3);


сценарий("умножение")
  .дано("рандомный коммент для степа", ПервыйАргументРавен, 3)
  .и(ВторойАргументРавен, 2)
  .когда(Перемножаю)
  .тогда(РезультатРавен, 6);

function ПервыйАргументРавен(this: Контекст, a: number): void {
  this.задаю(a, "ПервыйАргумент");
}

function ВторойАргументРавен(this: Контекст, a: number): void {
  this.задаю(a, "ВторойАргумент");
}

function Складываю(this: Контекст): void {
  const a = this.беруЧисло("ПервыйАргумент");
  const b = this.беруЧисло("ВторойАргумент");
  this.задаю(a + b, "Результат");
}

function Перемножаю(this: Контекст): void {
  const a = this.беруЧисло("ПервыйАргумент");
  const b = this.беруЧисло("ВторойАргумент");
  this.задаю(a * b, "Результат");
}

function РезультатРавен(this: Контекст, a: number): void {
  const b = this.беруЧисло("ПервыйАргумент");
  this.ожидаю(b).равно(a);
}