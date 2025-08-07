const home = document.getElementById('home-score');
const guest = document.getElementById('guest-score');

const homeOne = document.getElementById('home-one');
const homeTwo = document.getElementById('home-two');
const homeThree = document.getElementById('home-three');

const guestOne = document.getElementById('guest-one');
const guestTwo = document.getElementById('guest-two');
const guestThree = document.getElementById('guest-three');

let homeScore = 0;
let guestScore = 0;

homeOne.addEventListener('click', (event) => {
  homeScore += 1;
	home.textContent = homeScore;
});

homeTwo.addEventListener('click', (event) => {
	homeScore += 2;
	home.textContent = homeScore;
});

homeThree.addEventListener('click', (event) => {
	homeScore += 3;
	home.textContent = homeScore;
});

guestOne.addEventListener('click', (event) => {
	guestScore += 1;
	guest.textContent = guestScore;
});

guestTwo.addEventListener('click', (event) => {
	guestScore += 2;
	guest.textContent = guestScore;
});

guestThree.addEventListener('click', (event) => {
	guestScore += 3;
guest.textContent = guestScore;
});