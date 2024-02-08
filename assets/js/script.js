//Select all elements required
const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = infoBox.querySelector(".buttons .quit-btn");
const continueBtn = infoBox.querySelector(".buttons .restart-btn");
const quizBox = document.querySelector(".quiz-box");
const questionElement = document.getElementById("question");
const answerOptions = document.querySelector(".answer-options");
const resultBox = document.querySelector(".result-box");
const timeLineElement = document.querySelector("header .time-line");
const timeCount = document.querySelector(".timer .timer-sec");

// if startQuiz (startBtn) clicked
//show info box, add activeInfo class
startBtn.onclick = ()=>{
  questions = shuffle(questions); //Shuffle questions
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
startTimer();
//call startTimerLine function
startTimerLine();
};



/*Create variables to store the questions count, question number, counter, counterLine, width value and time value*/
let time = 15;
let timerInterval;
let timerLine;
let currentQuestionIndex = 0;
let correctScore = 0;
let incorrectScore = 0;


//Quiz Box
//get elements
const question = document.getElementById("question");
const nextBtn = document.querySelector("footer .next-btn");

// Function to shuflle the questions
// Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


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


/* Show question function */
function showQuestions() {
  resetState(); // Remove the previous answer options
let currentQuestion = questions[currentQuestionIndex]; // Get the current question from the array
let questionNumber = currentQuestionIndex + 1; // Add 1 to index to display the correct question number
// Display the question to user
question.innerHTML = questionNumber + ". " + currentQuestion.question;
console.log(answerOptions);

// Update the current question number in the span
document.getElementById('current-question').textContent = questionNumber;

// Display the answer options to the user
currentQuestion.answers = shuffle(currentQuestion.answers);
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


/* Function to clear the answer options */
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
Show next question after 1,5sec

/** Selected answer */
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  
  clearInterval(timerInterval); //Stop the timer when any answer buttons are clicked
  clearInterval(timerLine); //Stop the timer line when any answer buttons are clicked

  if (isCorrect){
    selectedBtn.classList.add("correct");
    correctScore++;
    document.getElementById('correct-score').textContent = correctScore;
  } else {
    selectedBtn.classList.add("incorrect");
    incorrectScore++;
    document.getElementById('incorrect-score').textContent = incorrectScore;
  }
  Array.from(answerOptions.children).forEach(button => {
    if (button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  setTimeout(showNextQuestion, 1500);
}


/** Display Next Question */
function showNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) { //if question count is less than total question length
    currentQuestionIndex++; //increment the current question number in header
    showQuestions();
    startTimer();
    startTimerLine();
  } else {
    // Otherwise, if there are no more questions remaining, show the result
    showResult();
  }
}


//Result Box 

//showResult function
//hide info box, remove activeInfo class
//hide quiz box, remove activeQuiz class
//show result box, add activeResult class
//pass the users score, total question number and message
function showResult(){
  infoBox.classList.remove("activeInfo");
  quizBox.classList.remove("activeQuiz");
  resultBox.classList.add("activeResult");
  let finalScoreElement = resultBox.querySelector(".final-score"); 

  let scoreMessage;
  if (correctScore <= 4){
    scoreMessage = '<span>You got <p>'+ correctScore +'</p> out of <p>'+ questions.length +'</p> Better luck next time!</span>';
  }
  else if (correctScore >= 5 && correctScore <= 7){
    scoreMessage = '<span>You got <p>'+ correctScore +'</p> out of <p>'+ questions.length +'</p> Good job! Just a little more now!</span>';
  }
  else if (correctScore >= 8 && correctScore <= 10) {
    scoreMessage = '<span>You got <p>'+ correctScore +'</p> out of <p>'+ questions.length +'</p> AWESOME! You know your mushrooms!</span>';
  }
  finalScoreElement.innerHTML = scoreMessage;

}


//TODO: exitBtn button is clicked
//

//TODO: If restartBtn is clicked
// showQuestion function



/* Start timer function */
function startTimer() {
  time = 15; // Reset the time to 15 seconds
  timeCount.textContent = time; // Update the timer display initially
  clearInterval(timerInterval); // Clear any existing interval, prevent overlapping timers
  // Start the interval
  timerInterval = setInterval(() => { 
    if (time <= 0) {
      clearInterval(timerInterval); // Stop the timer if time reaches 0
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestions();
        startTimer(); // Restart the timer for the next question
      } else {
        showResult(); // Show the result if no more questions remaining
      }
    } else {
      time--; // Decrement the time if it's greater than 0
      timeCount.textContent = time;// Update the timer display
    }
  }, 1000); // Repeat every 1 second (1000 milliseconds)
}



//TODO: startTimerLine function- Animation
// Set an interval to repeatedly call the 'timer' function
// define the timer function
// increment the 'time' variable by 1 on each interval
// update the width of the HTML element. The width is increased by the value of 'time' "%"
// if the time value exceeds 100%
//clear counterLine
let timeLine;

// Start timer line function
function startTimerLine() {
  let time = 0; // Initialize the time for the time line
  clearInterval(timerLine); // Clear any existing timer line interval
  timerLine = setInterval(timer, 150); // Adjust the interval as needed

  function timer() {
    time += 1; // Increment the time by 1
    timeLineElement.style.width = time + "%"; // Update the width of the time line element

    if (time >= 100) {
      clearInterval(timerLine); // Stop the timer when it reaches 100%
    }
  }
}

