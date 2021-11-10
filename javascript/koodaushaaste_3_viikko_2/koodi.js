// Tehtävä 1

function kolmenumeroinen(al,lo){
  let lu;
  let tu = [];
  for (let i = al; i < lo; i++) {
      const luL = i;
      lu = i.toString().split("");
      let a = lu[0].toString();
      let b = lu[1].toString();
      let c = lu[2].toString();
      let aa = a * a * a;
      let bb = b * b * b;
      let cc = c * c * c;
      switch (luL) {
        case aa+bb+cc:
          tu.push(luL);
          break;
      }
      }
      return tu.toString();
  }
console.log(kolmenumeroinen(100,999));

// Tehtävä 2

let tahti = "*";
for (let y = 0; y < 5; y++) {
  console.log(tahti);
  tahti += "*";
}

// Tehtävä 3

function koodikieleksi(str) {
  const ehdot = {a:"4",e:"3",o:"0",i:"1",s:"5"};
  let tu;
  tu = str.replace(/a|e|o|i|s/gi,function(matched){
    return ehdot[matched];
  });
  return tu;
};
console.log(koodikieleksi("ohjelmointi on hauskaa"));

//Tehtävä 4
//Jätetty taulukoksi, jotta on helpompi lukea
function luvut(alku,loppu) {
  let tulos = [];
  for (let y = alku;y<loppu;y++) {
    if (Number.isSafeInteger(y/3) == true & Number.isSafeInteger(y/5) == true) {
      tulos.push("hik-up");
    } else if  (Number.isSafeInteger(y/3) == true ) {
        tulos.push("Hik");
    } else if (Number.isSafeInteger(y/5) == true) {
    tulos.push("up");
    } else {
    tulos.push(y);
  }
  }
  return tulos;
}
console.log(luvut(1,100));
