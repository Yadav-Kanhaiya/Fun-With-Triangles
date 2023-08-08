const inputs = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateAreaOfTriangle(base,height){
  if(!base || !height){
    outputEl.innerText = "Enter all the fields";
   return areaOfTriangle;
  }
  else if(base<=0 || height<=0){
   outputEl.innerText = "Enter the positive numbers";
   return areaOfTriangle;
  }else{
    const areaOfTriangle = 1/2 *base *height;
    return areaOfTriangle;
  }    
}

function calculateArea(){
  const areaOfTriangle = calculateAreaOfTriangle(Number(inputs[0].value), Number(inputs[1].value));
  outputEl.innerText = "The area of Triangle is " + areaOfTriangle;
}

areaBtn.addEventListener("click", calculateArea);