/*
The elves are running low on wrapping paper
  they need to submit an order for more.
They have a list of the dimensions (length l, width w, and height h) of each present
  and only want to order exactly as much as they need.
Fortunately, every present is a box (a perfect right rectangular prism),
  which makes calculating the required wrapping paper for each gift a little easier:
    find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l.
The elves also need a little extra paper for each present: the area of the smallest side.
For example:
    A present of 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet
      plus 6 square feet of slack, for a total of 58 square feet.
    A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42
      plus 1 square foot of slack, for a total of 43 square feet.
All numbers in the elves' list are in feet.
How many total square feet of wrapping paper should they order?
*/

import { readFileSync } from "node:fs";

const test = [
  "2x3x4", //58 //34
  "1x1x10", //43 //14
  "7x2x5", //(2*(7*2)) + (2*(7*5)) + (2*(2*5)) + 10 = 28+70+20+10 = 128 //84
  "7x13x10", //(2*(7*10)) + (2*(7*13)) + (2*(10*13)) + 70 = 140+182+260+70 = 652
];
//total: 881 square feet

const lines = readFileSync("data.txt", { encoding: "utf-8" }).split("\r\n");

const part1 = () => {
  let finalCount = 0;
  lines
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

const part2 = () => {
  let finalCount = 0;
  lines
    .map((item) => item.split("\r\n"))
    .map((item) => item[0].split("x").sort((a, b) => a - b))
    .map((item) => {
      let count = item[0] * item[1] * item[2] + (item[0] * 2 + item[1] * 2);
      finalCount += count;
    });
  console.log(finalCount);
};

// console.log(testSolve);
part1();
part2();
