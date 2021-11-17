function te1() {
  let bo = document.getElementsByTagName("body")[0];
  let ar = bo.getElementsByTagName("article")[0];
  let ul = ar.getElementsByTagName("ul")[0];
  let li = ul.getElementsByTagName("li");
  console.log(li);
}

function te2() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let tau = [];
  for (let i = 0; i < 7; i++) {
    tau.push(getRandomIntInclusive(1, 40));
  }

  console.log(tau.toString());
}

function te3() {

}

function te4() {

}
