const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90°", "right angled", "One right angle", "5", "180°"];

function calculateScore() {
  const formResults = new FormData(quizForm);
  let score = 0;
  let index = 0;
  let number = 0;
  //formdata is used for fetchig data of form
  
  // for of will take values
  // here.entries will take in which question whata is the answer
  //we have .values to konw the values clicked
  for (let value of formResults.values()) {
     if(value === correctAnswers[index])
          score = score + 1;
          index = index + 1;
          number = number + 1;
  }
      if(number === 5)
      outputEl.innerText = "Your score is " + score; 
      else
      outputEl.innerText = "Fill all the fields"; 
}

submitAnswerBtn.addEventListener("click", calculateScore);