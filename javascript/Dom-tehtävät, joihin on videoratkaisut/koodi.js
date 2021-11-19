function ex1() {
  const al = document.querySelector("p");
  al.innerHTML = al.innerText
  .split(" ")
  .map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word)
  .join(" ");
}
function ex2() {
  let ar = document.getElementsByTagName("article")[0];
  let link = document.createElement("a");
  link.href = "https://forcemipsum.com/";
  link.textContent = "Teksti forcemipsum:sta";
  ar.appendChild(link);
}

function ex3() {
  let ar = document.getElementsByTagName("article")[0];
  const te = document.querySelector("p");
  te.innerHTML = te.innerHTML
  .split(/\.[^\.|<]/)
  .join("</p><p>") + "</p>";
}

function ex4() {
  let ar = document.getElementsByTagName("article")[0];
  let te = document.querySelector("p");
  let laSa = te.innerText.split(" ").length;
  let laSaTu = document.createElement("p");
  laSaTu.textContent = `${laSa} sanaa`;
  document.article.insertBefore(laSaTu, te);
}

function ex5() {
  Array.from(document.querySelectorAll("p"))
    .forEach(p => {
      p.innerHTML = p.innerHTML
        .replace(/\?/g, "@")
        .replace(/\!/g, "#");
    })
}
