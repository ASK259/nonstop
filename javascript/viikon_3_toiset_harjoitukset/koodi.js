function te1() {
  let li = document.getElementsByTagName("li");
  console.log(li);
  /*let to1 = document.getElementsByTagName("li")[0];
  let to2 = document.getElementsByTagName("li")[1];
  let to3 = document.getElementsByTagName("li")[2];
  let to4 = document.getElementsByTagName("li")[3];
  let to5 = document.getElementsByTagName("li")[4];
  let to6 = document.getElementsByTagName("li")[5];
  let to7 = document.getElementsByTagName("li")[6];
  let to8 = document.getElementsByTagName("li")[7];*/
  let tau = [];
  for (let i = 0; i < li.length; i++){
    tau.push(li[i].firstChild);
  }
  console.log(tau);
  console.log(tau[0]);
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
  tu = document.getElementsByTagName("p")[3];
  tu.textContent = tau;
}

function te3() {
  const arr =  [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
  let boEl = document.getElementsByTagName("article")[2];
  let tbl = document.createElement("table");
  let tBo = document.createElement("tbody");
  for (let i = 0; i < 2; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
      let cll = document.createElement("td");
      let clTe = document.createTextNode("uusi" +  "solu");
      cll.appendChild(clTe);
      row.appendChild(cll);
    }
    tBo.appendChild(row);
  }
  tbl.appendChild(tBo);
  boEl.appendChild(tbl);
  tbl.setAttribute("border", "2");
}

function te4() {

}
