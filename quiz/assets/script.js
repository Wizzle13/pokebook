//start screen user sees on load
const startScreen = document.getElementById("startScreen")
//start button
const btn = document.getElementById("btn");
const subLine = document.getElementById("subLine")
const quizContainer = document.getElementById('quizContainer')

//question incrementor
let i = 0

//score holders
var bug = 0
var drag = 0
var elct = 0
var figt = 0
var fire = 0
var fly = 0
var ghst = 0
var grss = 0
var grnd = 0
var ice = 0
var nrml = 0
var posn = 0
var psyc = 0
var rock = 0
var watr = 0
var stel = 0


//each question will have two type IDs
//every answer will add a point to each of these IDs
//at the end of the quiz, if there is 1 leading type, choose that type
//if there are 2 types tied for the lead, choose dual type pokemon
//if there are 3+ leaders, choose normal or fighting (extra question)

//answers.id[] are ordered from most to least relevant in the array
//most relevant is 4 points, least is 1

var question = new Array()

question[0] = new Array(
  "You are in a group, traveling on a road when Team Rocket ambushes you to steal your pokemon. What do you do?",
  new Array(
    "Tell everyone to spread out, while you go after the leader.",
    new Array(
      "Water", "Dragon", "Steel", "Fighting"
    )
  ),
  new Array (
    "Focus on the closest enemy. Once you defeat them, you'll deal with the others.",
    new Array(
      "Fire", "Electric", "Rock", "Flying"
    )
  ),
  new Array (
    "Use the confusion to slip out of sight. Use stealth to your advantage.",
    new Array(
      "Ghost", "Poison", "Psych", "Ice"
    )
  ),
  new Array (
    "Group up and work together. They can't take you all at once.",
    new Array(
      "Ground", "Grass", "Normal", "Bug"
    )
  ),
  
)

// var myQuestions = new Array ()

console.log(question[i])

// {
//   question: "You are in a group, traveling on a road when Team Rocket ambushes you to steal your pokemon. What do you do?",
//   index: 0,

//   answers: [
//     {
//       message: "Tell everyone to spread out, while you go after the leader.",
//       type: ["Water", "Dragon", "Steel", "Fighting"]
//     },
//     {
//       message: "Focus on the closest enemy. Once you defeat them, you'll deal with the others.",
//       type: ["Fire", "Electric", "Rock", "Flying"]
//     },
//     {
//       message: "Group up and work together. They can't take you all at once.",
//       type: ["Ground", "Grass", "Normal", "Bug"]
//     },
//     {
//       message: "Use the confusion to slip out of sight. Use stealth to your advantage.",
//       type: ["Ghost", "Poison", "Psych", "Ice"]
//     },
//   ]


//Display quiz from array when user presses start
function buildQuiz() {

  quizContainer.innerHTML = `<h3>${question[i][0]}</h3>
            
  <div class="mb-3"><button class="btn-block btn-primary" id="answerA" >${question[i][1][0]}</button></div>

  <div class="mb-3"><button class="btn-block btn-primary" id="answerB">${question[i][2][0]}</button></div>
            
  <div class="mb-3"><button class="btn-block btn-primary" id="answerC">${question[i][3][0]}</button></div>
  
  <div class="mb-3"><button class="btn-block btn-primary" id="answerD">${question[i][4][0]}</button></div>`

  //variables that contain id's for each button on the screen
  // var answerA = document.getElementById('answerA')
  // var answerB = document.getElementById('answerB')
  // var answerC = document.getElementById('answerC')
  // var answerD = document.getElementById('answerD')

  //each button is its own submit, and only the correct submit "id" will allow the user to increment index
  answerA.addEventListener('click', answerCheck)
  answerB.addEventListener('click', answerCheck)
  answerC.addEventListener('click', answerCheck)
  answerD.addEventListener('click', answerCheck)
}



function answerCheck() {

  if (this.id === "answerA") {
    question[i][1][1][0]+=4
    question[i][1][1][1]+=3
    question[i][1][1][2]+=2
    question[i][1][1][3]+=1
    console.log([bug,drag,elct,figt,fire,fly,ghst,grss,grnd,ice,nrml,posn,psyc,rock,watr,stel])
  } else if (this.id === "answerB") {
    answerScoreB++
  } else if (this.id === "answerC") {
    answerScoreC++
  } else if (this.id === "answerD") {
    answerScoreD++
  }
  
  i++;
  buildQuiz()
  
  // } else if (answerScoreA == 4) {
  //   callResult("type/3")
  // } else if (answerScoreB == 4) {
  //   callResult(answerScoreB)
  // } else if (answerScoreC == 4) {
  //   callResult(answerScoreC)
  // } else {
  //   callResult(answerScoreD)
  // }
}

function callResult(hello) {
  console.log(hello)
}

//when user clicks start, the timer starts and quiz is built
btn.onclick = function hideStart() {
  startScreen.setAttribute("class", "hidden")
  subLine.setAttribute("class", "hidden")
  quizContainer.removeAttribute('class', 'hidden')

  buildQuiz()
}


//     https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
//     plus you need https://developer.mozilla.org/en-US/docs/Web/API/FormData for getting the FormData
