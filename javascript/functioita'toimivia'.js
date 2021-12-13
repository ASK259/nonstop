/* Tänne on kopioitu hyväksytysti suoritettuja FCC:n tehtäviä malliksi
Toimii, kuin Loop, mutta If Else rakenteella. Tässä luodaan
Array kyseisellä toiminnolla.
*/
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum){
  return [];
  } else {
    const rangeArray = rangeOfNumbers(startNum + 1, endNum);
    rangeArray.unshift(startNum);
    return rangeArray;
  }
}
console.log(rangeOfNumbers(1, 10));
/* Testaa onko objektissa kyseistä propertyä
ja palauttaa tämän arvon

*/
function checkObj(obj, checkProp) {
  var test = obj.hasOwnProperty(checkProp);
  var tu = obj[checkProp];
  if (test == true) {
    return tu;
  } else {
      return "Not Found";
  }
}
console.log(checkObj({city: "Seattle"}, "city"));

/* E6 ominaisuuksista Objektista destructuring:lla
objektin arvot function käyttöön
*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min }) => {
  return (max + min) / 2.0;
}
console.log(half(stats));

/*E6 Objectin teko class ja constructor rakenteella
10.9 ei aivan auennut, kertaa jossain välissä
*/
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);

// Arrow function defaultilla.
const increment = (number, value = 1) => value + number;
console.log(increment(5, 3));

// slice,splice ja flat samassa. katso konsolilla.
function frankenSplice(arr1, arr2, n) {
  let va = arr1.slice();
  let tu = arr2.slice()
  tu.splice(n, 0, va);
  let re = tu.flat();
  return re;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
frankenSplice([1, 2, 3], [4, 5, 6], 1);

//luvun lisäys, taulukon järjestys ja lis.luvun indeksi.
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  let tu = arr.indexOf(num)
  console.log(tu)
  return tu;
}

getIndexToIns([2, 20, 10], 19);

// Toimiva Promise ketju Callback functioilla resolve ensin ja sitten reject
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
})

makeServerRequest.catch(error => {
  console.log(error);
});

//Kahdelle eri tyyppiselle objektille yhteinen kyky.
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

let glideMixin = function(obj) {
  obj.glide = function() {
     ability:glide;
  }
};
glideMixin(bird);
glideMixin(boat);

// key:n selvitys objektista ja siinä olevaan taulukkoon tiedon lisäys. Ei täysin "automatisoitu".

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  let key =[];
  let dKey;
  for(let ke in userObj) {
    key.push(ke);
  }
  console.log(key);
  dKey = key[2];
  userObj[dKey].friends.push(friend);
  console.log(userObj[dKey].friends);
  return userObj[dKey].friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));

// Summaa kaikki. [1, 4]

function suK(arr) {
  let sArr = arr.sort((a,b)=>a-b);
  let nu = 0;
  let i = parseInt(sArr.slice(0,1));
  console.log(typeof nu,i);
  for (;i<=sArr[1];i++) {
      nu += i;
  }
  console.log(nu);
  return nu;
}

// .sort() aakkosiin.

function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort((a,b) => a===b ?0:a<b?-1:1);
  // Only change code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// map() dataa array:sta

const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  }
];

const ratings = watchList.map(obj => {
   let rObj = {}
   rObj.title = obj.Title
   rObj.rating = obj.imdbRating
   return rObj
});

console.log(JSON.stringify(ratings));
