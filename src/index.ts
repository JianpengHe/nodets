import { promises } from "fs";
enum Color {
  Red,
  Green,
  Blue,
}
const test: [number, string][] = [];
(async () => {
  const txt = await promises.readFile(__dirname + "/index.js");
  const date: Date = new Date();
  test.push([2, "test"]);
  console.log(test, date.toLocaleString(), Color.Red, Color[2], String(txt));
})();
setTimeout(() => {}, 1e6);
