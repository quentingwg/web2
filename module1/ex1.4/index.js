const redLamp= document.querySelector(".red");
const OrangeLamp= document.querySelector(".orange");
const greenLamp= document.querySelector(".green");
let ok;
let timeOut;
start();
function start() {
   ok= false;
  let timeOut = setInterval(afficherRouge, 1000);
}



function afficherRouge(){
  redLamp.style.backgroundColor="red";
}
function clearRed(){
  redLamp.style.backgroundColor="white";

}
function clearOrange(){
  OrangeLamp.style.backgroundColor="white";

}
function clearGreen(){
  greenLamp.style.backgroundColor="white";

}



function afficherOrange(){
  redLamp.style.backgroundColor="white";
  OrangeLamp.style.backgroundColor="orange";
  greenLamp.style.backgroundColor="white";

  if(ok==true){
    clearInterval(timeOut);
    start();
  }else {
    timeOut = setInterval(afficherGreen,1000);

  }





}
function afficherGreen(){
  OrangeLamp.style.backgroundColor="white";
  greenLamp.style.backgroundColor="green";
   timeOut = setInterval(afficherOrange,1000);
  ok=true;








}



