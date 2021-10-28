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
