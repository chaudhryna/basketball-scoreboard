const home = document.getElementById('home-score');
const guest = document.getElementById('guest-score');

const homeOne = document.getElementById('home-one');
const homeTwo = document.getElementById('home-two');
const homeThree = document.getElementById('home-three');

const guestOne = document.getElementById('guest-one');
const guestTwo = document.getElementById('guest-two');
const guestThree = document.getElementById('guest-three');

const newGameBtn = document.getElementById('new-game-btn');

let homeScore = 0;
let guestScore = 0;

homeOne.addEventListener('click', (event) => {
  homeScore += 1;
	home.textContent = homeScore;
  winning();
});

homeTwo.addEventListener('click', (event) => {
	homeScore += 2;
	home.textContent = homeScore;
  winning();
});

homeThree.addEventListener('click', (event) => {
	homeScore += 3;
	home.textContent = homeScore;
  winning();
});

guestOne.addEventListener('click', (event) => {
	guestScore += 1;
	guest.textContent = guestScore;
  winning();
});

guestTwo.addEventListener('click', (event) => {
	guestScore += 2;
	guest.textContent = guestScore;
  winning();
});

guestThree.addEventListener('click', (event) => {
	guestScore += 3;
  guest.textContent = guestScore;
  winning();
});

function winning() {
  home.classList.remove("winning");
  guest.classList.remove("winning");

  if (homeScore > guestScore) {
    home.classList.add("winning")
  } else if (guestScore > homeScore) {
    guest.classList.add("winning")
  }
}

newGameBtn.addEventListener('click', (event) => {
  homeScore = 0;
  guestScore = 0;
  home.textContent = homeScore;
  guest.textContent = guestScore;
  winning();
})