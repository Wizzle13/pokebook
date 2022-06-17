var buttonEl = document.querySelectorAll('button');

const gameboy = document.getElementById('gameboy')

const grnBtn = document.getElementById("button_green")
const bluBtn = document.getElementById("button_blue")
const redBtn = document.getElementById("button_red")

function callTest() {
  document.location.replace('/quiz')
}

function callBoard() {
  document.location.replace('/dashboard')
}

function callPosts(){
  document.location.replace('/posts')
}

function insertRed() {
  setInterval(callTest, 3000)
  anime({
    targets: bluBtn,

    translateX: 200,


    duration: 2000,
    easing: 'easeOutElastic(1, .8)',
    loop: false
  })

  anime({
    targets: redBtn,
  keyframes: [
    {translateY: 50},
    {translateX: 230},
    {translateY: 400},
  ],
  duration: 1500,
  easing: 'easeOutElastic(1, .8)',
  loop: false
  })

  anime({
    targets: gameboy,
    translateY: 5000,
    scale: 100,
    delay: 2000,
    duration: 2000
  })
}

function insertBlu() {
  setInterval(callBoard, 3000)

  anime({
    targets: bluBtn,
  keyframes: [
    {translateY: 400},
  ],
  duration: 1500,
  easing: 'easeOutElastic(1, .8)',
  loop: false
  })

  anime({
    targets: gameboy,
    translateY: 5000,
    scale: 100,
    delay: 2000,
    duration: 2000
  })
}

function insertGrn() {
  setInterval(callPosts, 3000)
  anime({
    targets: bluBtn,

    translateX: -200,


    duration: 2000,
    easing: 'easeOutElastic(1, .8)',
    loop: false
  })

  anime({
    targets: grnBtn,
  keyframes: [
    {translateY: 50},
    {translateX: -230},
    {translateY: 400},
  ],
  duration: 1500,
  easing: 'easeOutElastic(1, .8)',
  loop: false
  })

  anime({
    targets: gameboy,
    translateY: 5000,
    scale: 100,
    delay: 2000,
    duration: 2000
  })
}

function animateButton(el, scale, duration, elasticity) {
  anime.remove(el);
  anime({
    targets: el,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}

function enterButton(el) {
  animateButton(el, 1.2, 800, 400)
};

function leaveButton(el) {
  animateButton(el, 1.0, 600, 300)
};

for (var i = 0; i < buttonEl.length; i++) {
  buttonEl[i].addEventListener('mouseenter', function (e) {
    enterButton(e.target);
  }, false);

  buttonEl[i].addEventListener('mouseleave', function (e) {
    leaveButton(e.target)
  }, false);
}

redBtn.addEventListener('click', function () { insertRed() })
bluBtn.addEventListener('click', function () { insertBlu() })
grnBtn.addEventListener('click', function () { insertGrn() })

// const button_test = document.getElementById('button_test')

// button_test.addEventListener('click', location.reload)

// anime({
//     targets: button_test,
//     translateX: 250,
//     easing: 'easeInOutSine'
//   });