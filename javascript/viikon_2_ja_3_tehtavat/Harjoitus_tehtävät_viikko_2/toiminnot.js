function järjestä()
{
  let st1 = document.getElementById('numero1').value;
  let st2 = document.getElementById('numero2').value;
  let st3 = document.getElementById('numero3').value;
  let sty = [];
  sty.push(st1), sty.push(st2), sty.push(st3);
  sty.sort(function(a, b){return a-b});
  document.getElementById('aloitus').innerHTML = 'Annoit luvut: ' + st1 + ',' + st2 + ',' + st3;
  document.getElementById('tulos').innerHTML = "Järjestys on: " + sty;
}

function test()
{
  document.getElementById('testi').innerHTML = 'Liian pikku tarkkaa touhua!!!';
}

function suurin() {
  let lu1 = document.getElementById('luku1').value;
  let lu2 = document.getElementById('luku2').value;
  let lu3 = document.getElementById('luku3').value;
  let lu4 = document.getElementById('luku4').value;
  let lu5 = document.getElementById('luku5').value;
  let tau = [];
  tau.push(lu1,lu2,lu3,lu4,lu5);
  tau.sort(function(a, b){return a-b});
  let tu = tau.pop();
  document.getElementById('luSu').innerHTML = "Suurin on: " + tu;
}

function paTon() {
  let lu = document.getElementById('luku').value;
  if (Number.isSafeInteger(lu/2) == true ) {
    return document.getElementById('pari').innerHTML = "Luku on: parillinen";
  } else {
    return document.getElementById('pari').innerHTML = "Luku on: pariton";
  }

}

function oikeus() {
  let ika = document.getElementById('ikä').value;
  let oik1 = 'polkupyörää';
  let oik2 = 'mopoa';
  let oik3 = 'autoa';
  if (ika < 15) {
    return document.getElementById('oik').innerHTML = "Saat ajaa: " + oik1;
  } else if (ika < 18) {
    return document.getElementById('oik').innerHTML = "Saat ajaa: " + oik2;
  } else {
    return document.getElementById('oik').innerHTML = "Saat ajaa: " + oik3;
  }
}


  function käännös() {
  let ti1 = document.getElementById('kLista');
  let ti2 = ti1.value;
  switch (ti2) {
    case "0":
      return document.getElementById('kään').innerHTML = "Hello World";
      break;
    case "1":
      return document.getElementById('kään').innerHTML = "Hej Värld";
      break;
    case "2":
      return document.getElementById('kään').innerHTML = "Hola Mundo";
      break;
  }
}
