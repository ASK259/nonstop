function järjestä()
{
  let st1 = document.getElementById('numero1').value;
  let st2 = document.getElementById('numero2').value;
  let st3 = document.getElementById('numero3').value;
  console.log(st1, st2, st3);
  let sty = [];
  sty.push(st1), sty.push(st2), sty.push(st3);
  console.log(sty);
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
  console.log(tau);
  tau.sort(function(a, b){return a-b});
  console.log(tau);
  let tu = tau.pop();
  console.log(tu);
  document.getElementById('luSu').innerHTML = "Suurin on: " + tu;
}

function paTon() {
  let lu = document.getElementById('luku').value;
  let lu2 =
  document.getElementById('pari').innerHTML = "Luku on: ";
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

/*function käännös() {
  var oForm = document.getElementsByName('kieli').value;

  var selected_option_value = oSelectOne.options[index].value;
  var selected_index = oForm.elements['kieli'].selectedIndex;

  if(selected_index > 0)
  {
    var selected_option_value = oForm.elements['kieli'].options[selected_index].value;
  }
  else {
    alert('Valitse kieli!');
  }
  document.getElementById('kään').innerHTML = "Saat ";

}

oSelectOne = oForm.elements['select_one_element_name'];
index = oSelectOne.selectedIndex;

function functionName() {

  var etunimi = document.getElementsByName('name').value
} */
