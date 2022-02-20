/*function tu(luku) {
  let ke = 1;
  for (let i = 1; i <= luku; i++) {
    ke = ke * i;
  }
  return ke;
}
*/
//console.log(tu(3));

/*let lu1 = 1;
 console.log(lu1 += 5);
 let tau = [["ef",2424],["www",5225]];
 console.log(tau[1]);
var re = "sana sans";
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
stats.uus = "323";
stats.uus = "444"
stats.uus = "444"*/

/*let lause = "Etsi tästä lauseesta sana";
let sana = /etsi/i;
console.log(sana.test(lause));*/

/*let lause = "Maailmassa monta on ihmeellistä asiaa";
let sana = /a+/ig;
console.log(lause.match(sana));*/

/*let lause = "Etsi lauseesta oikea sana";
let sana = /sana/g;
console.log(sana.test(lause));*/

/*let lause = "Olipa kerran kana, jonka takana oli musta lakana. Pakana, sanoi kana, ja käytti niittiä hakana.";
let sana = /^[h|i|j|k|l|m|n]/g;
console.log(lause.match(sana));*/

/*let lause = "jotain kissa. mikä kisa";
let sana = /kis?a/g;*/


/*class Thermostat {
  constructor(te) {
    this._te = te;
  }
  get temperature() {
    return 5/9 * (this._te - 32);
  }
  set temperature(nTem) {
    this._te = nTem * 9.0 / 5 + 32;
  }
}
//C = 5/9 * (F - 32)
//F = C * 9.0 / 5 + 32
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);

class Nelio {
  constructor(_width) {
    this.width = _width;
    this.height = _width
  }
  get area () {
    return this.width * this.height;
  }
  set area (area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

let ne = new Nelio(3);
console.log(ne.area);
ne.area = 16;
console.log(ne.width);*/

/*const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (var i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);*/

/*const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 === 1 ) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);*/

/*function urlSlug(title) {
  let ti = title.split(/\s/);
  console.log(ti);
  let tip = ti.join('-');
  return tip;
}
// Only change code above this line
urlSlug("Winter Is  Coming");
// Tavoite winter-is-coming
console.log(urlSlug("Winter Is Coming"));

function add(x) {
  // Only change code below this line
  return function(y) {
    return function (z) {
      return x + y + z;
    }
  }

  // Only change code above this line
}

add(10)(20)(30);
console.log(add(10)(20)(30));*/

/*let ta = [1,2,3,4];
let uTa = ta.splice(1,2);
console.log(uTa);*/
/*let alfabet = {aakkoset: 'a', kirjaimet: {kirjain: 'b'},numerot: {nro2: 2, nro3: 3, isot: {iso1: 100, iso2: 500}}};
console.log(alfabet.numerot.isot.iso2);*/
/*let taulukko = [2, 'merkkijono', 4, {nimi: 'Jaska', ika: 3}, true];
taulukko.splice(1,2,3,4);
console.log(taulukko);*/
/*let taulu = [1,12,[33,45,[15, 600,[57]]]];
console.log(taulu[2][1]);*/
/*let valot = {olohuone: true, makuuhuone: false, tyohuone: false, WC: false, eteinen: true};
for (let huoneet in valot) {
  console.log(huoneet);
}*/
/*let taulukko = ['mj',3,true];
let ut = [...taulukko, 3];
console.log(ut);*/

/*function kentTest() {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}*/
