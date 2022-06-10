//start screen user sees on load
const startScreen = document.getElementById("startScreen")
//start button
const btn = document.getElementById("btn");
const subLine = document.getElementById("subLine")
const quizContainer = document.getElementById('quizContainer')
const scoreSaver = document.getElementById('scoreSaver')
//When the game ends, this div presents the time score
const currentScore = document.getElementById('currentScore')
//variable to track question index
var i = 0
const initialsBtn = document.getElementById('initialsBtn')
const savedScores = document.getElementById('savedScores')
const hiddenScores = document.getElementById('hiddenScores')


var myQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",

    answers: [
      "js",
      "javascript",
      "script"
    ],
    correctAnswer: "script"
  },
  {
    question: "To access an HTML element from JavaScript, you can use this method:",

    answers: [
      "setAttribute",
      "getElementById",
      "getItem"
    ],
    correctAnswer: "getElementById"
  },
  {
    question: "How do you create a function in JavaScript?",

    answers: [
      "function myFunction()",
      "function = myFunction()",
      "function.myFunction()"
    ],
    correctAnswer: "function myFunction()"
  },
  {
    question: "Which statement tells the browser to write 'Hello Dolly' inside an HTML element with id='demo'?",

    answers: [
      "demo.innerHTML='Hello Dolly';",
      "document.getElementById('demo').innerHTML='Hello Dolly';",
      "document.getElementById('demo')= innerHTML('Hello Dolly');"
    ],
    correctAnswer: "document.getElementById('demo').innerHTML='Hello Dolly';"
  },
  {
    question: `javascript elements are executed in what order?`,

    answers: [
      "variables, functions, event listeners",
      "functions, variables, others",
      "in the sequence they are written"
    ],
    correctAnswer: "in the sequence they are written"
  },
  {
    question: `used to declare a javascript variable`,

    answers: [
      "function",
      "var",
      "//"
    ],
    correctAnswer: "var"
  },
]

//Display quiz from array when user presses start
function buildQuiz() {
  quizContainer.innerHTML = `<h3>${myQuestions[i].question}</h3>
            
  <div class="mb-3"><button class="btn-block btn-primary" id="answerA" >${myQuestions[i].answers[0]}</button></div>

  <div class="mb-3"><button class="btn-block btn-primary" id="answerB">${myQuestions[i].answers[1]}</button></div>
            
  <div class="mb-3"><button class="btn-block btn-primary" id="answerC">${myQuestions[i].answers[2]}</button></div>`

  //variables that contain id's for each button on the screen
  var answerA = document.getElementById('answerA')
  var answerB = document.getElementById('answerB')
  var answerC = document.getElementById('answerC')

  //each button is its own submit, and only the correct submit "id" will allow the user to increment index
  answerA.addEventListener('click', answerCheck)
  answerB.addEventListener('click', answerCheck)
  answerC.addEventListener('click', answerCheck)
}

//timer variables
let time = myQuestions.length * 20;
let timer;
const timerEl = document.getElementById('timerEl')

//timer function
function handleTimer() {
  //timer counts down
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    endGame()
  }
}

//colors red for 2 seconds on incorrect answer
function highlight() {

  timerEl.setAttribute('class', 'text-danger font-weight-bold');

  setTimeout(function () {
    timerEl.removeAttribute('class', 'text-danger font-weight-bold');
  }, 2000);

  var answerA = document.getElementById('answerA')
  var answerB = document.getElementById('answerB')
  var answerC = document.getElementById('answerC')

  answerA.setAttribute('class', 'btn-block btn-danger');

  setTimeout(function () {
    answerA.setAttribute('class', 'btn-block btn-primary');
  }, 2000);

  answerB.setAttribute('class', 'btn-block btn-danger');

  setTimeout(function () {
    answerB.setAttribute('class', 'btn-block btn-primary');
  }, 2000);

  answerC.setAttribute('class', 'btn-block btn-danger');

  setTimeout(function () {
    answerC.setAttribute('class', 'btn-block btn-primary');
  }, 2000);
}

function answerCheck() {
  //console.log(this.innerText)


  if (this.innerText === myQuestions[i].correctAnswer) {
    //if answer is correct
    console.log('correct!')
    //increment the index
    i++
    console.log(`index is ${i}`)
    console.log(`myQuestions length is ${myQuestions.length}`)
    //if the quiz is over
    if (myQuestions.length == i) {
      //end the quiz
      endGame()
    } else {
      //rebuild the quiz question
      buildQuiz()
    }
  } else {
    console.log('false!')
    //deduct time
    time = time - 15

    highlight()
  }
}

function endGame() {
  //hide timer
  timerEl.setAttribute('class', 'hidden')

  //set time to zero and clear interval
  clearInterval(timer)

  //ask the user if they would like to proceed to end of game, score save
  if (window.confirm("GAME OVER: Would you like to save your score?")) {
    highScore()
    //if not, reload
  } else {
    location.reload()
  }

}

function highScore() {
  //hide quiz
  quizContainer.setAttribute('class', 'hidden')
  //reveal end of game screen
  scoreSaver.removeAttribute('class', 'hidden')
  //add HTML to id=currentScore to display time score
  currentScore.innerHTML = `Your score is ${time}`
}

// function displayScores() {
//   savedScores.textContent = displayedScoreArray
// }

function printHighscores() {
  //pull from local
  var highScoresParse = JSON.parse(localStorage.getItem('highScores') || [])
  console.log("hs", JSON.stringify(highScoresParse))
  // var highScoresString = JSON.stringify(highScoresParse)

  for (let i = 0; i < highScoresParse.length; i++) {
    savedScores.innerHTML += `<p> ${highScoresParse[i].initials} scored ${highScoresParse[i].score} points </p>`;
  }
}

var initials = document.getElementById('initials')
var scoreArray = JSON.parse(window.localStorage.getItem("highScores")) || [];

initialsBtn.onclick = function scoreSave() {

  //compile user input and remaining time into one var
  var newScore = {
    'initials': initials.value,
    'score': time
  }

  //push to array
  scoreArray.push(newScore)

  //push array to local (see printHighScores() for pull)
  localStorage.setItem('highScores', JSON.stringify(scoreArray))

  //reload page on submit
  location.reload()

}

// savedScores.textContent = JSON.parse(localStorage.getItem('highScores'))

//when user clicks start, the timer starts and quiz is built
btn.onclick = function hideStart() {
  startScreen.setAttribute("class", "hidden")
  subLine.setAttribute("class", "hidden")
  quizContainer.removeAttribute('class', 'hidden')

  timer = setInterval(handleTimer, 1000);
  timerEl.textContent = time;

  buildQuiz()
}
printHighscores()

//     https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
//     plus you need https://developer.mozilla.org/en-US/docs/Web/API/FormData for getting the FormData
