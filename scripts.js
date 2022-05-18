const computerChoiceDisplay = document.getElementById("computer");
const userChoiceDisplay = document.getElementById("user");
const resultsDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach((possibleChoice) =>
	possibleChoice.addEventListener("click", (e) => {
		userChoice = e.target.id;
		userChoiceDisplay.innerHTML = userChoice;
		generateComputerChoice();
		getResult();
		stylesForResult();
	})
);

function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3);

	if (randomNumber === 1) {
		computerChoice = "Scissors";
	}
	if (randomNumber === 3) {
		computerChoice = "Paper";
	}
	if (randomNumber === 2) {
		computerChoice = "Rock";
	}

	computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
	if (computerChoice === userChoice) {
		result = "It's a Tie";
	}
	if (computerChoice === "Rock" && userChoice === "Paper") {
		result = "Congrats, You have Won!";
	}
	if (computerChoice === "Rock" && userChoice === "Scissors") {
		result = "You lose, Try again!";
	}
	if (computerChoice === "Paper" && userChoice === "Scissors") {
		result = "Congrats, You have Won!";
	}
	if (computerChoice === "Paper" && userChoice === "Rock") {
		result = "You lose, Try again!";
	}
	if (computerChoice === "Scissors" && userChoice === "Rock") {
		result = "Congrats, You have Won!";
	}
	if (computerChoice === "Scissors" && userChoice === "Paper") {
		result = "You lose, Try again!";
	}

	resultsDisplay.innerHTML = result;
}

function stylesForResult() {
	if (resultsDisplay.innerHTML === "You lose, Try again!") {
		resultsDisplay.classList.add("Loser");
	} else {
		resultsDisplay.classList.remove("Loser");
	}
	if (resultsDisplay.innerHTML === "Congrats, You have Won!") {
		resultsDisplay.classList.add("Winner");
	} else {
		resultsDisplay.classList.remove("Winner");
	}
	if (resultsDisplay.innerHTML === "It's a Tie") {
		resultsDisplay.classList.add("Tie");
	} else {
		resultsDisplay.classList.remove("Tie");
	}
}
