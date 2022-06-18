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
      "Something wholesome and healthy.",
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
      "Take time to understand the problem. The solution will show itself.",
      new Array(
        psyc, posn, ghst, bug
      )
    ),
    new Array(
      "Deploy all my powerful pokemon, they will get the job done.",
      new Array(
        fly, elct, fire, ice
      )
    )
  ),
  question[4] = new Array(
    "Favorite vacation spot.",
    new Array(
      "Anywhere remote; somewhere I have never been.",
      new Array(
        drag, elct, fly, psyc
      )
    ),
    new Array(
      "It has to be warm, with an ocean view",
      new Array(
        fire, nrml, watr, bug
      )
    ),
    new Array(
      "Somewhere harsh but beautiful.",
      new Array(
        psyc, posn, ghst, bug
      )
    ),
    new Array(
      "I don't need anything special. Something close to home is best.",
      new Array(
        rock, grss, ghst, figt
      )
    )
  ),
  question[5] = new Array(
    "What is your favorite thing to do on a friday night?",
    new Array(
      "Play video games.",
      new Array(
        stel, nrml, elct, bug
      )
    ),
    new Array(
      "Go out to a restaurant.",
      new Array(
        drag, grss, watr, posn
      )
    ),
    new Array(
      "Go to the movies.",
      new Array(
        psyc, figt, fire, fly
      )
    ),
    new Array(
      "Stay in and read a book.",
      new Array(
        grnd, ghst, rock, ice
      )
    )
  ),
  question[6] = new Array(
    "You are losing a pokemon battle to a superior team. How do you react?",
    new Array(
      "My pokemon need to learn how to handle themselves while at a disadvantage. Let them lose.",
      new Array(
        figt, stel, rock, grnd
      )
    ),
    new Array(
      "The battle is never over. Use items and go on the offensive.",
      new Array(
        drag, fire, ice, nrml
      )
    ),
    new Array(
      "Surrender the match. My pokemon do not deserve this treatment.",
      new Array(
        fly, grss, elct, psyc
      )
    ),
    new Array(
      "Stick to defensive abilities and get the team's stats up while we wait for an opening.",
      new Array(
        bug, ghst, watr, posn
      )
    )
  ),
  question[6] = new Array(
    "You are losing a pokemon battle to a superior team. How do you react?",
    new Array(
      "My pokemon need to learn how to handle themselves while at a disadvantage. Let them lose.",
      new Array(
        figt, stel, rock, grnd
      )
    ),
    new Array(
      "The battle is never over. Use items and go on the offensive.",
      new Array(
        drag, fire, ice, nrml
      )
    ),
    new Array(
      "Surrender the match. My pokemon do not deserve this treatment.",
      new Array(
        fly, grss, posn, psyc
      )
    ),
    new Array(
      "Stick to defensive abilities and get the team's stats up while we wait for an opening.",
      new Array(
        bug, ghst, watr, elct
      )
    )
  ),
  question[7] = new Array(
    "If you could have one super power, what would it be?",
    new Array(
      "Super strength",
      new Array(
        figt, nrml, stel, rock
      )
    ),
    new Array(
      "Flight",
      new Array(
        fly, drag, ghst, bug
      )
    ),
    new Array(
      "Mind Reading",
      new Array(
        posn, ice, watr, psyc
      )
    ),
    new Array(
      "Ability to create life",
      new Array(
        fire, grss, grnd, elct
      )
    )
  )

// console.log(question[i])

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
    // console.log(question[i][1][1])
    // console.log(userChoices)
  } else if (this.id === "answerB") {
    userChoices = userChoices.concat(question[i][2][1])
    // console.log(question[i][2][1])
    // console.log(userChoices)
  } else if (this.id === "answerC") {
    userChoices = userChoices.concat(question[i][3][1])
    // console.log(question[i][3][1])
    // console.log(userChoices)
  } else if (this.id === "answerD") {
    userChoices = userChoices.concat(question[i][4][1])
    // console.log(question[i][4][1])
    // console.log(userChoices)
  };
  console.log(i)
  console.log(question.length)
  // findMax(userChoices)
  if (i < 7) {
    i++;
    buildQuiz()
  } else {
    findMax(userChoices)
  }
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

  showResults(item)
}

function showResults(item) {
  const endScreen = document.getElementById('endScreen')
  const pokemonType = document.getElementById('pokemonType')
  const typeDescription = document.getElementById('typeDescription')

  quizContainer.setAttribute('class', 'hidden')
  endScreen.removeAttribute('class', 'hidden')

  if (item == 1) {
    typeDescription.innerText = "A strategic, team player. You are always looking for the next fast paced interaction."
    pokemonType.innerText = " Bug"
    var choice = [
      "scyther",
      "beedrill",
      "caterpie"
    ]
  } else if (item == 2) {
    typeDescription.innerText = "A courageous leader and fierce fighter. You never shy away from a chance at adventure."
    pokemonType.innerText = " Dragon"
    var choice = [
      "dragonair",
      "dragonite",
      "gible"
    ]
  } else if (item == 3) {
    typeDescription.innerText = "Equal parts focused and chaotic. When you're charged up, it is truly a spectacle."
    pokemonType.innerText = " Electric"
    var choice = [
      "pikachu",
      "electabuzz",
      "jolteon"
    ]
  } else if (item == 4) {
    typeDescription.innerText = "Powerful and headstrong. You lead your team through sheer force of will."
    pokemonType.innerText = " Fighting"
    var choice = [
      "machoke",
      "hitmonlee",
      "hitmonchan"
    ]
  } else if (item == 5) {
    typeDescription.innerText = "Emotionally powerful and focused. Your inner flame drives you to greatness."
    pokemonType.innerText = " Fire"
    var choice = [
      "ninetales",
      "charizard",
      "cyndaquil"
    ]
  } else if (item == 6) {
    typeDescription.innerText = "Adventurous and laser accurate. You take the high ground in fighting and in life."
    pokemonType.innerText = " Flying"
    var choice = [
      "pidgeotto",
      "farfetchd",
      "mantine"
    ]
  } else if (item == 7) {
    typeDescription.innerText = "Mysterious and driven. Anyone who finds themselves at odds with you is right to fear the dark."
    pokemonType.innerText = " Ghost"
    var choice = [
      "banette",
      "gengar",
      "drifloon"
    ]
  } else if (item == 8) {
    typeDescription.innerText = "Leadership is a delicate balance. You surround yourself with an ecosystem of trustworthiness."
    pokemonType.innerText = " Grass"
    var choice = [
      "ivysaur",
      "chikorita",
      "bellossom"
    ]
  } else if (item == 9) {
    typeDescription.innerText = "Stable and hardy. You are the strength others look to in hard times."
    pokemonType.innerText = " Ground"
    var choice = [
      "cubone",
      "sandslash",
      "rhyhorn"
    ]
  } else if (item == 10) {
    typeDescription.innerText = "Cold and elusive. Your coolheaded nature gets you through any situation"
    pokemonType.innerText = " Ice"
    var choice = [
      "swinub",
      "regice",
      "walrein"
    ]
  } else if (item == 11) {
    typeDescription.innerText = "Friendship, bravery and strength define you. You will always be there for your team."
    pokemonType.innerText = " Normal"
    var choice = [
      "meowth",
      "kangaskhan",
      "snorlax"
    ]
  } else if (item == 12) {
    typeDescription.innerText = "Quiet and strategic. Your adversaries will never know what hit them."
    pokemonType.innerText = " Poison"
    var choice = [
      "arbok",
      "nidoqueen",
      "muk"
    ]
  } else if (item == 13) {
    typeDescription.innerText = "Patient and methodical. You master your mind and see through any challenge"
    pokemonType.innerText = " Psychic"
    var choice = [
      "abra",
      "wobbuffet",
      "mewtwo"
    ]
  } else if (item == 14) {
    typeDescription.innerText = "Tough and focused. Your team can stand the test of time."
    pokemonType.innerText = " Rock"
    var choice = [
      "geodude",
      "onix",
      "aerodactyl"
    ]
  } else if (item == 15) {
    typeDescription.innerText = "Adaptable and courageous. Your team will turn the tide on any competitors."
    pokemonType.innerText = " Water"
    var choice = [
      "squirtle",
      "gyarados",
      "starmie"
    ]
  } else if (item == 16) {
    typeDescription.innerText = "Rare and mysterious. The hottest furnaces forge the strongest wills."
    pokemonType.innerText = " Steel"
    var choice = [
      "steelix",
      "aggron",
      "jirachi"
    ]
  }

  fetchPokemon(choice)
}

function fetchPokemon(choice) {
  const pokemonSprite1 = document.getElementById('pokemonSprite1')
  const pokemonSprite2 = document.getElementById('pokemonSprite2')
  const pokemonSprite3 = document.getElementById('pokemonSprite3')

  var pokeAPI1 = `https://pokeapi.co/api/v2/pokemon/${choice[0]}`
  var pokeAPI2 = `https://pokeapi.co/api/v2/pokemon/${choice[1]}`
  var pokeAPI3 = `https://pokeapi.co/api/v2/pokemon/${choice[2]}`

  fetch(pokeAPI1).then(function (response) {
    response.json().then(function (pokeInfo1) {
      console.log(pokeInfo1.id);

      pokemonSprite1.innerHTML = `<img src="${pokeInfo1.sprites.front_default}" alt="pokemon1">`
    })
  })
  fetch(pokeAPI2).then(function (response) {
    response.json().then(function (pokeInfo2) {
      console.log(pokeInfo2.id);

      pokemonSprite2.innerHTML = `<img src="${pokeInfo2.sprites.front_default}" alt="pokemon2">`
    })
  })
  fetch(pokeAPI3).then(function (response) {
    response.json().then(function (pokeInfo3) {
      console.log(pokeInfo3.id);

      pokemonSprite3.innerHTML = `<img src="${pokeInfo3.sprites.front_default}" alt="pokemon3">`
    })
  })


  anime({
    targets: '.wobble',
    keyframes:[
    {translateY: -25},
    {translateY: 0}
    ],
    duration: 2000,
    loop: true,
    easing: 'easeInOutSine',
    // direction: 'alternate',
    delay: anime.stagger(500)

  });

  anime({
    targets: '.professorOak',
    translateY: 500,
    translateX: 150,
    scale: 100,
  })
}

btn.onclick = function hideStart() {
  startScreen.setAttribute("class", "hidden")
  subLine.setAttribute("class", "hidden")
  quizContainer.removeAttribute('class', 'hidden')

  buildQuiz()
}