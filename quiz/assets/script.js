//start screen user sees on load
const startScreen = document.getElementById("startScreen")
//start button
const btn = document.getElementById("btn");
const subLine = document.getElementById("subLine")
const quizContainer = document.getElementById('quizContainer')

//question incrementor
let i = 0

var count = 0

userChoices = []

//score holders
var bug = 1
var drag = 2
var elct = 3
var figt = 4
var fire = 5
var fly = 6
var ghst = 7
var grss = 8
var grnd = 9
var ice = 10
var nrml = 11
var posn = 12
var psyc = 13
var rock = 14
var watr = 15
var stel = 16

//each question will correspond to 4 pokemon types.

var question = new Array()

question[0] = new Array(
  "You are in a group, traveling on a road when Team Rocket ambushes you to steal your pokemon. What do you do?",
  new Array(
    "Tell everyone to spread out, while you go after the leader.",
    new Array(
      watr, drag, stel, figt
    )
  ),
  new Array(
    "Focus on the closest enemy. Once you defeat them, you'll deal with the others.",
    new Array(
      fire, elct, rock, fly
    )
  ),
  new Array(
    "Use the confusion to slip out of sight. Use stealth to your advantage.",
    new Array(
      ghst, posn, psyc, ice
    )
  ),
  new Array(
    "Group up and work together. They can't take you all at once.",
    new Array(
      grnd, grss, nrml, bug
    )
  )
),
  question[1] = new Array(
    "Describe your perfect pokemon companion.",
    new Array(
      "Just so long as we're friends, that is all that matters.",
      new Array(
        bug, psyc, nrml, fly
      )
    ),
    new Array(
      "A good leader for the rest of the team would make the best companion.",
      new Array(
        drag, stel, watr, grss
      )
    ),
    new Array(
      "One that shares my personal goals is best.",
      new Array(
        elct, rock, ghst, fire
      )
    ),
    new Array(
      "Whichever companion that will help me win matches.",
      new Array(
        figt, ice, grnd, posn
      )
    )
  ),

  question[2] = new Array(
    "What is your favorite food?",
    new Array(
      "Food is fuel, nothing more.",
      new Array(
        ghst, psyc, rock, stel
      )
    ),
    new Array(
      "Pizza!",
      new Array(
        elct, nrml, watr, drag
      )
    ),
    new Array(
      "Dessert!",
      new Array(
        posn, fire, bug, ice
      )
    ),
    new Array(
      "Anything high in protein.",
      new Array(
        figt, fly, grnd, grss
      )
    )
  ),

  question[3] = new Array(
    "How do you deal with obstacles in life?",
    new Array(
      "I run into them headfirst.",
      new Array(
        nrml, figt, rock, grnd
      )
    ),
    new Array(
      "I tell my team what we can all do to overcome it.",
      new Array(
        drag, stel, watr, grss
      )
    ),
    new Array(
      "One that shares my personal goals is best.",
      new Array(
        elct, rock, ghst, fire
      )
    ),
    new Array(
      "Whichever companion that will help me win matches.",
      new Array(
        figt, ice, grnd, posn
      )
    )
  ),

  // var myQuestions = new Array ()

  console.log(question[i])

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
    userChoices = userChoices.concat(question[i][1][1])
    console.log(question[i][1][1])
    console.log(userChoices)
  } else if (this.id === "answerB") {
    userChoices = userChoices.concat(question[i][2][1])
    console.log(question[i][2][1])
    console.log(userChoices)
  } else if (this.id === "answerC") {
    userChoices = userChoices.concat(question[i][3][1])
    console.log(question[i][3][1])
    console.log(userChoices)
  } else if (this.id === "answerD") {
    userChoices = userChoices.concat(question[i][4][1])
    console.log(question[i][4][1])
    console.log(userChoices)
  };

  findMax(userChoices)

  i++;
  buildQuiz()
}

function findMax(arr1) {
  var mf = 1;
  var m = 0;
  var item;
  for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
      if (arr1[i] == arr1[j])
        m++;
      if (mf < m) {
        mf = m;
        item = arr1[i];
      }
    }
    m = 0;
  }
  console.log(item + " ( " + mf + " times ) ");
}


btn.onclick = function hideStart() {
  startScreen.setAttribute("class", "hidden")
  subLine.setAttribute("class", "hidden")
  quizContainer.removeAttribute('class', 'hidden')

  buildQuiz()
}


//     https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
//     plus you need https://developer.mozilla.org/en-US/docs/Web/API/FormData for getting the FormData
