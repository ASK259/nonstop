function te1() {

  let ul = document.getElementsByTagName("ul");
  console.log(ul);
  function nodeListIteration(li) {
    if (li == null)
    return;
    for (let i = 0; i < li.childNodes.length; i++) {
    return nodeListIteration(li.childNodes[i]);
    }
  }
  console.log(nodeListIteration(ul));
  let kirjaimet;
  /*let to = document.getElementsByTagName("li")[0].firstChild.textContent;
  let to1 = document.getElementsByTagName("li")[1].firstChild.textContent;
  let to2 = document.getElementsByTagName("li")[2].firstChild.textContent;
  let to3 = document.getElementsByTagName("li")[3].firstChild.textContent;
  let to4 = document.getElementsByTagName("li")[4].firstChild.textContent;
  let to5 = document.getElementsByTagName("li")[5].firstChild.textContent;
  let to6 = document.getElementsByTagName("li")[6].firstChild.textContent;
  let to7 = document.getElementsByTagName("li")[7].firstChild.textContent;
  let kirjaimet = /[A-Z]/g;
  let mu = to.match(kirjaimet);
  let mu1 = to1.match(kirjaimet);
  let mu2 = to2.match(kirjaimet);
  let mu3 = to3.match(kirjaimet);
  let mu4 = to4.match(kirjaimet);
  let mu5 = to5.match(kirjaimet);
  let mu6 = to6.match(kirjaimet);
  let mu7 = to7.match(kirjaimet);*/
  let sa = document.getElementsByTagName("input")[0].value;
  console.log(sa);
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
  for (let i = 0; i < arr.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < arr[i].length; j++) {
      let cll = document.createElement("td");
      let clTe = document.createTextNode(arr[i]);
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
  let maat =  ['&#9828;', '&#9827;', "&#9826;", "&#9825;"];
  let bo = document.getElementsByTagName("article"[3]);
  let numerot = [];
  function luvut(alk, lop) {
    return Array(lop - alk + 1).fill().map((_, idx) => alk + idx);
  }
  numerot = luvut(1, 13);
  let ko = [];
  for (let i = 0; i < numerot.length; i++) {
    for (let j = 0; j < maat.length; j++) {
      ko.push(Math.floor(Math.random())
    }
  }

  document.getElementById("t4T").innerText = maat;
  /*let te = document.createElement("p");
  let tu = document.createTextNode("rbsbebe");
  te.appendChild(tu);
  console.log(te);*/
}
