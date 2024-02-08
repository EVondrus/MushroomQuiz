//Select all elements required
const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = infoBox.querySelector(".buttons .quit-btn");
const continueBtn = infoBox.querySelector(".buttons .restart-btn");
const quizBox = document.querySelector(".quiz-box");
const questionElement = document.getElementById("question");
const answerOptions = document.querySelector(".answer-options");
const resultBox = document.querySelector(".result-box");
const timeLine = document.querySelector("header .time-line");
const timeCount = document.querySelector(".timer .timer-sec");

// if startQuiz (startBtn) clicked
//show info box, add activeInfo class
startBtn.onclick = ()=>{
  infoBox.classList.add("activeInfo"); 
};

//Info Box

// if exitQuiz (exitBtn) clicked
//hide info box, remove activeInfo class
exitBtn.onclick = ()=>{
  infoBox.classList.remove("activeInfo");
};


// if continueBtn clicked
continueBtn.onclick = ()=>{
//hide info box, show quiz box
  infoBox.classList.remove("activeInfo"); 
  quizBox.classList.add("activeQuiz"); 
//call function to run the questions and answer
  showQuestions(); 
//give 1 parameter to current question
//call startTimer function
//call startTimerLine function
};



/*Create variables to store the questions count, question number, counter, counterLine, width value and time value*/

// Select an element from the element


//Quiz Box
//get elements
const question = document.getElementById("question");
const nextBtn = document.querySelector("footer .next-btn");

// Create an array passing the questions, answer options and set the correct answer
// Get from question.js
let questions = [
  {
    question: "What is the main purpose of a mushroom cap?",
    answers: [
      { text: "Reproduction", correct: false },
      { text: "Protection", correct: true },
      { text: "Collecting sunlight", correct: false },
      { text: "Attracting insects", correct: false },
       
    ]
  },
  {
    question: "Which mushroom is commonly used in cooking?",
    answers: [
      { text: "Fly Agaric", correct: false },
      { text: "Autumn Skullcap", correct: false },
      { text: "Button Mushroom", correct: true },
      { text: "Inky Cap", correct: false },
       
    ]
  },
  {
    question: "Where are spores produced in a mushroom?",
    answers: [
      { text: "Stipe", correct: false },
      { text: "Gills", correct: true },
      { text: "Cap", correct: false },
      { text: "Annulus", correct: false },
    ]
  },
  {
    question: "Which mushroom is known for it's glowing in the dark properties?",
    answers: [
      { text: "Morel", correct: false },
      { text: "Chanterelle", correct: false },
      { text: "Shiitake", correct: false },
      { text: "Jack O'Lantern", correct: true },
    ]
  },
  {
    question: "Which toxic mushroom has a bright red cap with white dots?",
    answers: [
      { text: "Fly Agaric", correct: true },
      { text: "Death Cap", correct: false },
      { text: "Sickener", correct: false },
      { text: "False Morel", correct: false },
    ]
  },
  {
    question: "What is the common name for Pleurotus ostreatus?",
    answers: [
      { text: "Shiitake", correct: false },
      { text: "Oyster Mushroom", correct: true },
      { text: "Enoki", correct: false },
      { text: "Morel", correct: false },
    ]
  },
  {
    question: "What is the primary role of the mycelium in mushrooms?",
    answers: [
      { text: "Producing spores", correct: false },
      { text: "Conducting photosynthesis", correct: false },
      { text: "Exchanging gases", correct: false },
      { text: "Absorbing nutrients", correct: true },
    ]
  },
  {
    question: "Which mushroom is often used as a meat substitute in vegetarian dishes?",
    answers: [
      { text: "Portabello", correct: true },
      { text: "Enoki", correct: false },
      { text: "Oyster", correct: false },
      { text: "Maitake", correct: false },
    ]
  },
  {
    question: "Which mushroom is known for its medicinal benefits?",
    answers: [
      { text: "Morel", correct: false },
      { text: "Chanterelle", correct: false },
      { text: "Cremin", correct: false },
      { text: "Maitake", correct: true },
    ]
  },
  {
    question: "What is the most commonly cultivated mushroom worldwide?",
    answers: [
      { text: "Lions Mane", correct: false },
      { text: "Chanterelle", correct: false },
      { text: "White button", correct: true },
      { text: "Oyster", correct: false },
    ]
  }

];



let currentQuestionIndex = 0;
let score = 0;

// Display questions and answers, update current question and score
function  showQuestions() {
  // Remove the previous answer options
  resetState();

// Get the current question from the array
// Add 1 to index to display the correct question number
let currentQuestion = questions[currentQuestionIndex]; 
let questionNumber = currentQuestionIndex + 1; 
// Display the question
question.innerHTML = questionNumber + ". " + currentQuestion.question;
console.log(answerOptions);

// Update the current question number in the span
document.getElementById('current-question').textContent = questionNumber;

// Display the answer options to the user
currentQuestion.answers.forEach(answer => {
  let button = document.createElement("button");
  button.innerText = answer.text;
  button.classList.add("answer-btn");
  answerOptions.appendChild(button);

  // Set the data attribute for the correct answer
  if (answer.correct) {
    button.dataset.correct = answer.correct; 
  }

  // Set event listener for answer buttons with select answer function
  button.addEventListener("click", selectAnswer);
});
}


/* Function to clear the answer options  */
function resetState() {
  while (answerOptions.firstChild) {
    answerOptions.removeChild(answerOptions.firstChild);
  }
}

/* Function for selected answers
Check if correct,
Display incorrect and/or correct answer
Increase the score of correct or incorrect
Disable answer buttons,
Display nextBtn */
let correctScore = 0;
let incorrectScore = 0;

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect){
    selectedBtn.classList.add("correct");
    // Increment the correct score by 1
    document.getElementById('correct-score').textContent++;
  } else {
    selectedBtn.classList.add("incorrect");
    document.getElementById('incorrect-score').textContent++;
  }
  Array.from(answerOptions.children).forEach(button => {
    if (button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = nextBtn.classList.add("show");
}


// when nextBtn clicked
//if question count is less than total question length
nextBtn.addEventListener("click", function() {
if (currentQuestionIndex < questions.length - 1) {
//increment the current question number in header
currentQuestionIndex++;
//show next question
showQuestions();

// Clear counter and counterLine function...


// Hide the next button
nextBtn.classList.remove("show");
} else {
  // Clear interval counter and counterLine
  // Otherwise, if there are no more questions remaining, show the result
  showResult();
}
});


//Result Box 

//showResult function
//hide info box, remove activeInfo class
//hide quiz box, remove activeQuiz class
//show result box, add activeResult class
//pass the user score number and total question number

//exitBtn button is clicked
//

//If restartBtn is clicked
// showQuestion function
//startTimer function
//set counter value to 15
//call timer function
//change the value of timeCount with time value
//decrement the time value


//if timer is less than 0
//clear interval, clear counter


//startTimerLine function- Animation
// Set an interval to repeatedly call the 'timer' function
// define the timer function
// increment the 'time' variable by 1 on each interval
// update the width of the HTML element. The width is increased by the value of 'time' "%"
// if the time value exceeds 100%
//clear counterLine

