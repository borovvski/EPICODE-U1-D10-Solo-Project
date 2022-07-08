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
console.log(splitMe("coding is not super easy"));
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

function isThisAnEmail(mail) {
  let properMailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(properMailFormat)) {
    return true, "This email address is valid!";
  } else {
    return false, "The email address is not valid!";
  }
}
console.log(isThisAnEmail("hamdbhaffd@gmail.com"));

console.log("\n/* EXERCISE 7\n");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function whatDayIsIt() {
  const day = new Date();
  let d = days[day.getDay()];
  return d;
}
console.log(whatDayIsIt());

console.log("\n/* EXERCISE 8\n");

function rollTheDice(number) {
  let results = {
    sum: 0,
    values: [],
  };
  for (let i = 0; i < number; i++) {
    let roll = dice();
    results.sum += roll;
    results.values.push(roll);
  }
  return results;
}
console.log(rollTheDice(3));

console.log("\n/* EXERCISE 9\n");

function howManyDays(date) {
  let today = new Date();
  let theDate = new Date(date);
  let difference = today.getTime() - theDate.getTime();
  difference / (1000 * 3600 * 24);
  return difference;
}
console.log(howManyDays(01 / 01 / 2022));
console.log("\n/* EXERCISE 10\n");
console.log("/////JS Arrays & Objects/////\n");
console.log("\n/* EXERCISE 11\n");

// function deletoProp() {}

console.log("\n/* EXERCISE 12\n");
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
// movies.Year = function oldestMovie([title]) {
//   title = movies.Title;
//   return Math.min.apply(Math, [title]);
// };
// console.log(oldestMovie([title]));
// console.log(oldestMovie());
console.log("\n/* EXERCISE 13\n");
