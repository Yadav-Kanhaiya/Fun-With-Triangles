const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    if(!angle1 || !angle2 || !angle3){
        outputEl.innerText="Enter all the fields";
        return sumOfAngles;
    }
    else if(angle1<=0 || angle2<=0 || angle3<=0){
        outputEl.innerText = "Enter the positive number."
        return sumOfAngles;
    }else{
    const sumOfAngles = Number(angle1) + Number(angle2) + Number(angle3);
    return sumOfAngles;
    }
}


function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(inputs[0].value, inputs[1].value, inputs[2].value);
    if(sumOfAngles === 180){
        outputEl.innerText="These angles will form a Triangle"
    }else{
        outputEl.innerText = "Oh no ... the angles dont form a Traingle"
    }
}

isTriangleBtn.addEventListener("click", isTriangle)