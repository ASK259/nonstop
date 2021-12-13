function kaan() {
  let ku = document.querySelector('.an');
  return ku.classList.toggle('hover');
   /*ku.addEventListener( 'click', function () {
    ku.classList.toggle('hover');
  })*/
}

function kaan2() {
  let ku = document.querySelector('.ve');
  console.log(ku);
  return ku.classList.toggle('hov');
}

function kaan3() {
  let tu = document.getElementsByTagName('td');
  console.log(tu);
  tu.addEventListener('click', function () {
    img.src = "muokattu1,2500.jpg";
    
  })
  /*let ku = document.querySelectorAll('td');
  return ku.classList.toggle('hov');*/}
