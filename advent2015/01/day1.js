/*
Santa is trying to deliver presents in a large building.
He starts on the ground floor (floor 0) and then follows the instructions one character at a time.
An opening parenthesis, (, means he should go up one floor
  closing parenthesis, ), means he should go down one floor.
For example:
    (()) and ()() both result in floor 0.
    ((( and (()(()( both result in floor 3.
    ))((((( also results in floor 3.
    ()) and ))( both result in floor -1 (the first basement level).
    ))) and )())()) both result in floor -3.
To what floor do the instructions take Santa?
*/

import { readFileSync } from "fs";

const floors = readFileSync("data.txt", { encoding: "utf-8" });

const part1 = () => {
  let num = 0;
  for (let i = 0; i < floors.length; i++) {
    floors[i] === "(" ? num++ : num--;
  }
  // const num = [...floors]
  //   .filter((c) => c)    //comma separate each value of the string into array
  //   .reduce((a, b) => a + (b === "(" ? 1 : -1), 0);
  console.log(num);
};

/*
Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1).
The first character in the instructions has position 1, the second character has position 2, and so on.
For example:
    ) causes him to enter the basement at character position 1.
    ()()) causes him to enter the basement at character position 5.
What is the position of the character that causes Santa to first enter the basement?
*/

const part2 = () => {
  let num = 0;
  for (let i = 0; i < floors.length; i++) {
    floors[i] === "(" ? num++ : num--;
    if (num === -1) {
      return console.log(i + 1);
    }
  }
  console.log(num);
};

// console.log(arr);
part1();
part2();
