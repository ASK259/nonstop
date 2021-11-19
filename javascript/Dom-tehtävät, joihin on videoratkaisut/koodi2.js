function ex1() {
  document.getElementById("username")
    .insertAdjacentHTML("beforeBegin", "<label>Nimi: </label>");
  document.getElementById("password")
    .insertAdjacentHTML("beforeBegin", "<label>Salasana: </label>");
  document.getElementById("confirmPassword")
    .insertAdjacentHTML("beforeBegin", "<label>Vahvista salasana: </label>");

}
