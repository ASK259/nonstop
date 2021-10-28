// Tehtävä 1
var taulukko = [8,5,2,6,9,4]

function pieninSuurin (ko) {
 ko.sort();
 console.log(ko);
 var eka = ko[0];
 var vika = ko[ko.length - 1];
 console.log(eka,vika);
 return eka, vika;
}

pieninSuurin (taulukko);
console.log(pieninSuurin(taulukko));

// Tehtävä 2

function paTon(lu) {

  switch (lu) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 8:
      lu = 'parillinen';
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
      lu = 'pariton';
      break;
    return lu;
  }


}
paTon(15);
console.log(paTon(15));

// Tehtävä 3

function kkNu(nu) {
  switch (nu) {
    case 1:
     nu ='tammikuu';
      break;
    case 2:
      nu = 'helmikuu';
      break;
    case 3:
      nu = 'maaliskuu';
      break;
    case 4:
      nu = 'huhtikuu';
      break;
    case 5:
      nu = 'toukokuu';
      break;
    case 6:
      nu = 'kesäkuu';
      break;
    case 7:
      nu = 'heinäkuu';
      break;
    case 8:
      nu = 'elokuu';
      break;
    case 9:
      nu = 'syyskuu';
      break;
    case 10:
      nu = 'lokakuu';
      break;
    case 11:
      nu = 'marraskuu';
      break;
    case 12:
      nu = 'joulukuu';
      break;
  }
  return nu;

}
kkNu(11);
console.log(kkNu(11));


// Tehtävä 4
function Tiedot(etunimi,sukunimi,osoite,postinumero,postitoimipaikka,puhelin,sahkoposti)
{
  this.etunimi = etunimi;
  this.sukunimi = sukunimi;
  this.osoite = osoite;
  this.postinumero = postinumero;
  this.postitoimipaikka = postitoimipaikka;
  this.puhelin = puhelin;
  this.sahkoposti = sahkoposti;

  this.tiedot = NyT;

}

function NyT()
{
  var etunimi = this.etunimi;
  var sukunimi = this.sukunimi;
  var osoite = this.osoite;
  var postinumero = this.postinumero;
  var postitoimipaikka = this.postitoimipaikka;
  var puhelin = this.puhelin;
  var sahkoposti = this.sahkoposti;
    document.write('Yhteystiedot ovat ' + etunimi + ' ' + sukunimi + ' ' +
    'asuu' + osoite + ' ' + postinumero + ' ' + postitoimipaikka +
    ' puhelin ' + puhelin + ' sähköposti ' + sahkoposti);
}

var He1 = new Tiedot('Henkilö', 'Ensimmäinen', 'Katu 3225', 4589, 'Jossain', 9034523435, 'HE@ko.com');
var He2 = new Tiedot('Person', 'Toinen', 'Tie 796', 9065, 'Tuolla', 0534538437, 'PT@op.net');
var He3 = new Tiedot('Ihminen', 'Kolmas', 'Katu 945', 5843, 'Siellä', 9438524375, 'IK@sp.fi');


console.log(Tiedot.NyT);
// Tehtävä 5

function käänAak(aak) {
  var aak2 = Array.from(aak);
  aak2.sort();
  var aak3 = aak2.join('');
  return aak3;
}

käänAak('codeking');
console.log(käänAak('codeking'));

// Tehtävä 6

function arvosana(he, pi) {
  if (pi < 50) {
    return he + ' Hylätty';
  } else if (pi < 60) {
    return he + ' T1';
  } else if (pi < 70) {
    return he + ' T2';
  } else if (pi < 80) {
    return he + ' H3';
  } else if (pi < 90) {
    return he + ' H4';
  } else if (pi < 100) {
    return he + ' K5';
  }
}

console.log(arvosana('Daniel',80));
console.log(arvosana('Viivi',77));
console.log(arvosana('Tiina',88));
console.log(arvosana('Ismael',95));
console.log(arvosana('Tuomas',68));
