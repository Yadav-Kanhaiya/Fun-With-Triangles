const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a,b){
  var sumOFSquares = a*a +b*b;
  return sumOFSquares;
}

function calculateLength(){
  const sumOFSquares= calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
  const lengthOfHypo = Math.sqrt(sumOFSquares);
  outputEl.innerText = "The length is" + lengthOfHypo;

}

function calculateHypotenuse(){
  var sideA = sides[0].value;
  var sideB = sides[1].value;
  if(!sideA || !sideB){
    outputEl.innerText = "Input all the sides";
  }
  else if(sideA < 1 || sideB < 1){
    outputEl.innerText = "side can not be negative or zero";
  }
  else{
    calculateLength(sides.value);
  }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);