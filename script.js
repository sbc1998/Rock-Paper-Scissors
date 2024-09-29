
const choices= document.querySelectorAll('.choice'); // returns array
const score= document.getElementById('score');
const result= document.getElementById('result');
const restart= document.getElementById('restart');
const modal= document.querySelector('.modal');


const scoreboard= {
	player: 0,
	computer:0
}

function play(e) {
	restart.style.display= "inline-block";
	const playerChoice= e.target.id;
	const computerChoice= getComputerChoice();
	const winner= getWinner(playerChoice,computerChoice);
	console.log(playerChoice,computerChoice);
	console.log(winner);
	showWinner(winner,computerChoice);	 
}

function getComputerChoice() {
	const random= Math.random();
	if(random<0.34) {
		return "rock";
	}
	else if(random<=0.67) {
		return "paper";
	}
	else {
		return "scissors";
	}
}

//to get winner
function getWinner(p,c) {
	if(p===c) {
		return "draw";
	}
	else if(p==="rock" && c==="paper") {
		return "computer";
	}
	else if(p==="paper" && c==="scissors") {
		return "computer";
	}
	else if(p==="scissors" && c==="rock") {
		return "computer";
	}
	else {
		return "player";
	}
}

// to display winner

function showWinner(winner, computerChoice) {
	//to display result
	if(winner==="player") {
		scoreboard.player++;
		result.innerHTML= `
			<h1 class="text-win" style= "color: #4ef037;"> You win </h1>
			<i class="fas fa-hand-${computerChoice} fa-10x"> </i>
			<p> Computer Chose <strong> ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) } </strong> </p>
		`
	}
	else if(winner==="computer") {
		scoreboard.computer++;
		result.innerHTML= `
			<h1 class="text-win" style= "color: #dc2f2f;"> You lose </h1>
			<i class="fas fa-hand-${computerChoice} fa-10x"> </i>
			<p> Computer Chose <strong> ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) } </strong> </p>
		`
	}
	else {
		result.innerHTML= `
			<h1 class="text-win" style= "color: #132743;"> It's a Draw </h1>
			<i class="fas fa-hand-${computerChoice} fa-10x"> </i>
			<p> Computer Chose <strong> ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) } </strong> </p>
		`;
	}

	//to display score
	score.innerHTML= `
		<p> Player: ${scoreboard.player} </p>
		<p> Computer: ${scoreboard.computer} </p>
    `;

    modal.style.display= 'block';
}

//to clear modal box(pop-up box)
function clearmodal(e) {
	if(e.target==modal) {
		modal.style.display= 'none';
	}
}

//to restart game
function restartGame() {
	scoreboard.player= 0;
	scoreboard.computer= 0;
	score.innerHTML= `
		<p> Player: ${scoreboard.player} </p>
		<p> Computer: ${scoreboard.computer} </p>
    `;
}

// event listener
choices.forEach(item=> item.addEventListener('click', play));
window.addEventListener('click', clearmodal);
restart.addEventListener('click', restartGame);

