const cards = document.querySelectorAll(".card");
// console.log(cards);
const time = document.querySelector('.time');
const counter = document.querySelector('.counter');

//variables
var isFlipped = false;
var firstCard;
var secondCard;
let moves = 0;
let seconds = 0;
let minutes = 0;
let seconds_str = '';
let minutes_str = '';
let timer_observer;
let correct_flips = 0;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //   console.log("Card flipped");
  // console.log(this);
  moves++;
  counter.innerHTML = moves;
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  correct_flips++;
  reset();
}

function fail() {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 900);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

function startWatching(seconds, minutes) {
	timer_observer = setInterval(() => {
		seconds > 58 ? ((minutes += 1), (seconds = 0)) : (seconds += 1);
		seconds_str = seconds > 9 ? `${seconds}` : `0${seconds}`;
		minutes_str = minutes > 9 ? `${minutes}` : `0${minutes}`;
		time.innerHTML = `${minutes_str}:${seconds_str}`;
		if (correct_flips >= 9) {
			audio.play();
			clearInterval(timer_observer);
			return;
		}
		// console.log(minutes, seconds_str);
	}, 1000);
}


(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 18);
    console.log(index)
    card.style.order = index;
  });
  startWatching(seconds, minutes);
})();
