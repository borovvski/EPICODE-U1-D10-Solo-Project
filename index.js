console.log("/////JS Basics/////\n");
console.log("\n/* EXERCISE A\n");

let test = "second week";

console.log(test);

console.log("\n/* EXERCISE B\n");

let sum = 10 + 20;

console.log(sum);

console.log("\n/* EXERCISE C\n");

let min = 0;
let max = 20;
let random = Math.random() * (max - min) + min;
console.log(Math.floor(random));

console.log("\n/* EXERCISE D\n");

let me = {
  name: "Brandon",
  surname: "Borowski",
  age: "28",
};
console.log(me);
console.log("\n/* EXERCISE E\n");

delete me.age;
console.log(me);
console.log("\n/* EXERCISE F\n");

me.skills = ["HTML", "CSS", "JavaScript-basics"];
console.log(me);

console.log("\n/* EXERCISE G\n");

delete me.skills.pop();
console.log(me);
console.log("\n/////JS Functions/////\n");
console.log("\n/* EXERCISE 1\n");

function dice(min, max) {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(dice(1, 6));

console.log("\n/* EXERCISE 2\n");

function whoIsBigger(no1, no2) {
  if (no1 > no2) {
    return no1;
  } else {
    return no2;
  }
}
console.log(whoIsBigger(99, 100));

console.log("\n/* EXERCISE 3\n");

function splitMe(str) {
  let splitStr = str.split(" ");
  return splitStr;
}
console.log(splitMe("I really love coding"));
console.log("\n/* EXERCISE 4\n");

function deleteOne(string, boolean) {
  let str = string.split("");
  if (boolean === true) {
    str.shift("");
    return str.join("");
  } else {
    str.pop("");
    return str.join("");
  }
}
console.log(deleteOne("absolutely", false));

console.log("\n/* EXERCISE 5\n");

function onlyLetters(string) {
  return string.replace(/\d+/g, "");
}
console.log(onlyLetters("the week has 7 days"));

console.log("\n/* EXERCISE 6\n");

console.log("\n/* EXERCISE 7\n");
console.log("\n/* EXERCISE 8\n");
