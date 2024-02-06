//Select all elements required
const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = infoBox.querySelector(".buttons .quit-btn");
const continueButton = infoBox.querySelector(".buttons .restart-btn");
const quizBox = document.querySelector(".quiz-box");
const questionElement = document.getElementById("question");
const answerOptions = document.querySelector("answer-options")
const resultBox = document.querySelector(".result-box");
const timeLine = document.querySelector("header .time-line");
const timeCount = document.querySelector(".timer .timer-sec");

// if startQuiz (startBtn) clicked
//show info box, add activeInfo class
startBtn.onclick = ()=>{
  infoBox.classList.add("activeInfo"); 
}

//Info Box

// if exitQuiz (exitBtn) clicked
//hide info box, remove activeInfo class
exitBtn.onclick = ()=>{
  infoBox.classList.remove("activeInfo");
}



// if continueQuiz (continueBtn) clicked
//hide info box, remove activeInfo class
//show quiz box, add activeQuiz class
//call showQestions function
//give 1 parameter to queCounter
//call startTimer function
//call startTimerLine function


/*Create variables to store the questions count, question number,
 user score, counter, counterLine, width value and time value*/



// Select an element from the element


// if quitQuiz button clicked
//reload the current window



// if restartQuiz (continueBtn) on results box clicked
//show quiz box, add activeQuiz class
//hide result box, remove activeResult class
//call showQestions function
//pass question number value to question Counter
//clear the counter
//clear counterLine
//call startTimer function
//call startTimerLine function
//hide the next button, remove "show"


//Quiz Box
//get elements

// Create an array passing the questions, answer options and set the correct answer
// Get from question.js


//get question
/* Show question function */
  // Remove the previous answer options 

  // Get the current question from the array
  // Add 1 to index to display the correct question number
  // Display the question
  // Display the answer options
  
  // Set the data attribute for the correct answer
  // Set up the event listener for answer buttons with select answer function

   
/* Create A Function to remove the the previous answer options */

/* Create A function for selected answers
Check if correct, add correct class
Else, add incorrect class
Disable answer buttons
nextBtn display, add show class */



// if nextB clicked
//if question count is less than total question length
//increment the currentQuestion value
//call the showQestions function
//clear counter
//clear counterLine
//call startTimer function
//call startTimerLine function
//hide the next button, remove "show"

// Else
//clear counter
//clear counterLine
//call Show Result function


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

