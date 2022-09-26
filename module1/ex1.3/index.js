
const btn = document.querySelector("#btn");
const nbr = document.querySelector("#nombre");
const text = document.querySelector("#txt");

nbr.innerHTML=0;

var number= 0;

btn.addEventListener("click", increase);
function increase(e){
  number++;
  nbr.innerHTML=number;
  if(number<10) text.innerHTML= " Bravo, bel échauffement ! ";
  else text.innerHTML= "Vous êtes passé maître en l'art du clic ! ";

}
console.log(number);



