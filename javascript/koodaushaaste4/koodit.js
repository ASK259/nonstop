function ha1() {
  let te = document.getElementsByTagName("input")[0].value;
  let ta = /^[A-Z]/;
  let tu = ta.test(te);
  const tark = (arv) => arv == true ? "On" : "Ei ole";
  document.getElementById("t1T").innerText = tark(tu);
}

function ha2() {
  let te = document.getElementsByTagName("input")[1].value;
  document.getElementById("t2T").innerText = te.trim();
}

function ha3() {
  let te = document.getElementsByTagName("input")[2].value;
  let taVo = /[aeiouåäö]/ig;
  let vo = te.match(taVo);
  document.getElementById("t3T").innerText = "Vokaaleja on " + vo.length;
}

function ha4() {
  let te = document.getElementsByTagName("input")[3].value;
  console.log(te);
  let ta = /\W/g;
  let tu = ta.test(te)
  const tark = (arv) => (arv == true) ? "Ei ole" : "On";
  document.getElementById("t4T").innerText = tark(tu);
}

function ha5() {
let nu = document.getElementsByTagName("input")[4].value;
let tau = Array.from(nu);
const tark = (arv) => (arv.length == 5) ? "On" : "Ei ole";
document.getElementById("t5T").innerText = tark(tau);
}

function ha6() {
  let te = document.getElementsByTagName("input")[5].value;
  let teTa = te.length;
  let ta = /-|A./;
  let ta1 = /[0-9]|a-z$/;
  /*const tark = (arv) => (arv == 11) ? te : document.getElementById("t6T").innerText = "Ei ole s.tur.no";
  tark(teTa);*/
  let tu = ta.test(te);
  let tu1 = ta1.test(te);
  console.log(tu, tu1);
  const vast = (a, b, c) => (a == true && b == true && c == 11) ? document.getElementById("t6T").innerText = "On" : document.getElementById("t6T").innerText = "EI";
  vast(tu, tu1, teTa);
}

function ha7() {
  let te = document.getElementsByTagName("input")[6].value;
  let ta = /<|>/;
  let tu  = ta.test(te);
  const tark = (arv) => (arv == true) ? document.getElementById("t7T").innerText = "On HTML-tägejä"  : document.getElementById("t7T").innerText = "Ei ole HTML-tägejä";
  tark(tu)
}
