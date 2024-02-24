import { readFileSync } from "node:fs";

const test = ["<^>^>>v<^>>vv>"];

const lines = readFileSync("data.txt", { encoding: "utf-8" }).split("\r\n");

const part1 = () => {
  let currentLocation = [0, 0];
  test
    .map((item) => item.split("\r\n"))
    .map((item) => item[0].split("x"))
    .map((item) => {
      let countArr = [item[0] * item[1], item[0] * item[2], item[1] * item[2]];
      let count =
        2 * countArr[0] +
        2 * countArr[1] +
        2 * countArr[2] +
        Math.min(...countArr);
      finalCount += count;
    });
  console.log(finalCount);
};

const part2 = () => {};

part1();
part2();
