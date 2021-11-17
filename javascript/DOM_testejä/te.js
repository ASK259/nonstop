function vaihda() {
  var he = document.getElementsByTagName("H2").item(0);
  he.firstChild.data = "Dynaaminen dokumentti";
  let pa = document.getElementsByTagName("P").item(0);
  pa.firstChild.data = "Eka lause";
  let te = document.createTextNode("Toka lause");
  let el = document.createElement("P");
  el.appendChild(te);
  pa.parentNode.appendChild(el);
}

function lPöytä() {
  let body = document.getElementsByTagName("body")[0];
  let tbl = document.createElement("table");
  let tBo = document.createElement("tbody");
  for (let i = 0; i < 2; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
      let cll = document.createElement("td");
      let clTe = document.createTextNode("ruutu vaaka " +i+", pysty "+j);
      cll.appendChild(clTe);
      row.appendChild(cll);
    }
    tBo.appendChild(row);
  }
  tbl.appendChild(tBo);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}

function vVa() {
  let bo = document.getElementsByTagName("body")[0];
  boEl = bo.getElementsByTagName("p");
  let myP = boEl[1];
  myP.style.background = "red";
  bo = document.getElementsByTagName("body")[0];
  boEl = bo.getElementsByTagName("p");
  myp = boEl[1];
  let myTN = document.createTextNode("Maailma");
  myP.appendChild(myTN);
  let mNPT = document.createElement("p");
  bo.appendChild(mNPT);
  myP.removeChild(myTN);
  mNPT.appendChild(myTN);
}

function start() {
  bo = document.getElementsByTagName("body")[0];
  myTa = document.createElement("table");
  myTaBo = document.createElement("tbody");
  for (let i = 0; i < 4; i++) {
    mCR = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
      mCL = document.createElement("td");
      cT = document.createTextNode("Solu pysty "+ i + ", vaaka" + j);
      mCL.appendChild(cT);
      mCR.appendChild(mCL);
    }
    myTaBo.appendChild(mCR);
  }
  myTa.appendChild(myTaBo);
  bo.appendChild(myTa);
  myTa.setAttribute("border","2");
  let mybo = document.getElementsByTagName("body")[0];
  let myTa2 = document.getElementsByTagName("table")[0];
  let myTaBo2 = myTa2.getElementsByTagName("tbody")[0];
  let myR = myTaBo2.getElementsByTagName("tr")[1];
  let myC = myR.getElementsByTagName("td")[1];
  let myCT = myC.childNodes[0];
  let cT2 = document.createTextNode(myCT.data);
  mybo.appendChild(cT2);
  myTa2.getAttribute("border");
  bo = document.getElementsByTagName("body")[0];
  myTa = document.createElement("table");
  myTaBo = document.createElement("tbody");
  for (let row = 0; row < 4; row++) {
    mCR = document.createElement("tr");
    for (let col = 0; col < 4; col++) {
      mCC = document.createElement("td");
      cT = document.createTextNode("solu on: "+ row + col);
      mCC.appendChild(cT);
      mCR.appendChild(mCC);
      if (col === 0) {
        mCC.style.background = "red";
      } else {
        mCC.style.background = "aqua";
      }
    }
    myTaBo.appendChild(mCR);
  }
myTa.appendChild(myTaBo);
bo.appendChild(myTa);
}
