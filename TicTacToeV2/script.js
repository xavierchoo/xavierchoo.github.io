let emptyBoxes = { "box1": 0, "box2": 0, "box3": 0 ,"box4": 0, "box5": 0, "box6": 0, "box7":0, "box8": 0,"box9":0};
let filledBoxes = [''];
let botCorner = ['boxSecond','boxFourth','boxSixth','boxEight']
const boxFirst = document.getElementById('box1');
const boxSecond = document.getElementById('box2');
const boxThird = document.getElementById('box3');
const boxFourth = document.getElementById('box4');
const boxFifth = document.getElementById('box5');
const boxSixth = document.getElementById('box6');
const boxSeven = document.getElementById('box7');
const boxEight = document.getElementById('box8');
const boxNine = document.getElementById('box9');
let CheckWin;
let computerCheckWin;
let selected;
let determine = true;
let numberDetermine = 0;//bot is even number
let boxesAll = document.getElementsByClassName("boxesAll");
let playerWon = document.getElementById('playerWon');
let botWon = document.getElementById('botWon');
let restart = document.getElementById('Restart')
let randomNumber ;
let playerWin = 0;
let botWin = 0;
let blue;
let TieDetermine = false;
boxesAll = boxesAll[0]
function reselecting(){
 while(filledBoxes.includes(blue)){
 	console.log('Please select an empty box.');
 	selecting();
 }
}
function smartBot(){
	if(numberDetermine == 1 && filledBoxes.includes('box5')){
		let randomchoose;
		randomchoose = Math.floor(Math.random()*4)
		botCorner[randomNumber].classList.add('bot');
		filledBoxes.push(botCorner[randomchoose]);
	}
	if(numberDetermine == 2 && filledBoxes.includes('box5') && filledBoxes.includes('box1') && filledBoxes.includes('box2')){
		boxSecond.classList.add('bot');
		filledBoxes.push('box2');
	}
	if(numberDetermine == 3 && filledBoxes.includes('box5') && filledBoxes.includes('box1') && filledBoxes.includes('box2') && filledBoxes.includes('box8')){
		boxNine.classList.add('bot');
		filledBoxes.push('box9');
	}
}
function PlayerCheck(){

	if((filledBoxes.includes('box1') && filledBoxes.includes('box2') && filledBoxes.includes('box3') && boxFirst.classList.contains('player') && boxSecond.classList.contains('player') && boxThird.classList.contains('player')) ||
	(filledBoxes.includes('box4') && filledBoxes.includes('box5') && filledBoxes.includes('box6') && boxFourth.classList.contains('player') && boxFifth.classList.contains('player') && boxSixth.classList.contains('player'))||
	(filledBoxes.includes('box7') && filledBoxes.includes('box8') && filledBoxes.includes('box9') && boxSeven.classList.contains('player') && boxEight.classList.contains('player') && boxNine.classList.contains('player'))||
	(filledBoxes.includes('box1') && filledBoxes.includes('box5') && filledBoxes.includes('box9') && boxFirst.classList.contains('player') && boxFifth.classList.contains('player') && boxNine.classList.contains('player'))||
	(filledBoxes.includes('box3') && filledBoxes.includes('box5') && filledBoxes.includes('box7') && boxThird.classList.contains('player') && boxFifth.classList.contains('player') && boxSeven.classList.contains('player'))||
	(filledBoxes.includes('box1') && filledBoxes.includes('box4') && filledBoxes.includes('box7') && boxFirst.classList.contains('player') && boxFourth.classList.contains('player') && boxSeven.classList.contains('player'))||
	(filledBoxes.includes('box2') && filledBoxes.includes('box5') && filledBoxes.includes('box8') && boxSecond.classList.contains('player') && boxFifth.classList.contains('player') && boxEight.classList.contains('player'))||
	(filledBoxes.includes('box3') && filledBoxes.includes('box6') && filledBoxes.includes('box9') && boxThird.classList.contains('player') && boxSixth.classList.contains('player') && boxNine.classList.contains('player')))
	{
		console.log('You have won!');
		playerWin++ ;
		playerWon.innerHTML('You have won : '+playerWin+' times.');
		TieDetermine = true;
	}
}
function BotCheck(){
	if((filledBoxes.includes('box1') && filledBoxes.includes('box2') && filledBoxes.includes('box3') && boxFirst.classList.contains('bot') && boxSecond.classList.contains('bot') && boxThird.classList.contains('bot')) ||
	(filledBoxes.includes('box4') && filledBoxes.includes('box5') && filledBoxes.includes('box6') && boxFourth.classList.contains('bot') && boxFifth.classList.contains('bot') && boxSixth.classList.contains('bot'))||
	(filledBoxes.includes('box7') && filledBoxes.includes('box8') && filledBoxes.includes('box9') && boxSeven.classList.contains('bot') && boxEight.classList.contains('bot') && boxNine.classList.contains('bot'))||
	(filledBoxes.includes('box1') && filledBoxes.includes('box5') && filledBoxes.includes('box9') && boxFirst.classList.contains('bot') && boxFifth.classList.contains('bot') && boxNine.classList.contains('bot'))||
	(filledBoxes.includes('box3') && filledBoxes.includes('box5') && filledBoxes.includes('box7') && boxThird.classList.contains('bot') && boxFifth.classList.contains('bot') && boxSeven.classList.contains('bot'))||
	(filledBoxes.includes('box1') && filledBoxes.includes('box4') && filledBoxes.includes('box7') && boxFirst.classList.contains('bot') && boxFourth.classList.contains('bot') && boxSeven.classList.contains('bot'))||
	(filledBoxes.includes('box2') && filledBoxes.includes('box5') && filledBoxes.includes('box8') && boxSecond.classList.contains('bot') && boxFifth.classList.contains('bot') && boxEight.classList.contains('bot'))||
	(filledBoxes.includes('box3') && filledBoxes.includes('box6') && filledBoxes.includes('box9') && boxThird.classList.contains('bot') && boxSixth.classList.contains('bot') && boxNine.classList.contains('bot')))
	{
		console.log('Bot have won!');
		botWin++ ;
		TieDetermine = true;
		botWon.innerHTML('Bot have won '+botWin+' times.');
	}
}
function BotChoosing(){

	if(Object.entries(emptyBoxes).length != 0  ){// turn obj into an array
		
		randomNumber = Math.floor(Math.random()* 10);
		if (randomNumber == 0){
			randomNumber = 1;
		}
		if(randomNumber == 1 && !filledBoxes.includes('box1')){
			boxFirst.classList.add('bot');
			delete emptyBoxes.box1;
			filledBoxes.push ('box1');
		}
		else if(randomNumber == 2 && !filledBoxes.includes('box2')){
			boxSecond.classList.add('bot');
			delete emptyBoxes.box2;
			filledBoxes.push ('box2');
		}
		else if(randomNumber == 3 && !filledBoxes.includes('box3')){
			boxThird.classList.add('bot');
			delete emptyBoxes.box3;
			filledBoxes.push ('box3');
		}
		else if(randomNumber == 4 && !filledBoxes.includes('box4')){
			boxFourth.classList.add('bot');
			delete emptyBoxes.box4;
			filledBoxes.push ('box4');
		}
		else if(randomNumber == 5 && !filledBoxes.includes('box5')){
			boxFifth.classList.add('bot');
			delete emptyBoxes.box5;
			filledBoxes.push ('box5');
		}
		else if(randomNumber == 6 && !filledBoxes.includes('box6')){
			boxSixth.classList.add('bot');
			delete emptyBoxes.box6;
			filledBoxes.push ('box6');
		}
		else if(randomNumber == 7 && !filledBoxes.includes('box7')){
			boxSeven.classList.add('bot');
			delete emptyBoxes.box7;
			filledBoxes.push ('box7');
		}
		else if(randomNumber == 8 && !filledBoxes.includes('box8')){
			boxEight.classList.add('bot');
			delete emptyBoxes.box8;
			filledBoxes.push ('box8');
		}
		else if(randomNumber == 9 && !filledBoxes.includes('box9')){
			boxNine.classList.add('bot');
			delete emptyBoxes.box9;
			filledBoxes.push ('box9');
		}
		else{
			BotChoosing();
		}
	}
}
function canceling(){

		if(selected == "box1" && !filledBoxes.includes('box1')){
			delete emptyBoxes.box1;
			filledBoxes.push ('box1');
		}
		else if( selected == 'box2'&& !filledBoxes.includes("box2")){
			delete emptyBoxes.box2;
			filledBoxes.push ('box2');
		}
		else if( selected == "box3"&& !filledBoxes.includes("box3")){
			delete emptyBoxes.box3;
			filledBoxes.push ('box3');
		}
		else if( selected == 'box4'&& !filledBoxes.includes("box4")){
			delete emptyBoxes.box4;
			filledBoxes.push ('box4');
		}
		else if( selected == 'box5'&& !filledBoxes.includes("box5")){
			delete emptyBoxes.box5;
			filledBoxes.push ('box5');
		}
		else if( selected == 'box6'&& !filledBoxes.includes("box6")){
			delete emptyBoxes.box6;
			filledBoxes.push ('box6');
		}
		else if( selected == 'box7'&& !filledBoxes.includes("box7")){
			delete emptyBoxes.box7;
			filledBoxes.push ('box7');
		}
		else if( selected == 'box8'&& !filledBoxes.includes("box8")){
			delete emptyBoxes.box8;
			filledBoxes.push ('box8');
		}
		else if( selected == 'box9'&& !filledBoxes.includes("box9")){
			delete emptyBoxes.box9;
			filledBoxes.push ('box9');
		}
		else{
			window.alert('This box had been selected. Please choose an empty box.');
			selecting();
		}
}
for ( i = 0 ; i < filledBoxes.length ; i++){
function selecting(event){
	
	if (determine){
		selected = event.target.id;
		blue = event.target;
		blue.classList.add('player');
		console.log(selected);
		canceling();
		PlayerCheck();
		console.log(numberDetermine);
		}
	else{
		BotChoosing();
		console.log('Bot:'+ randomNumber);
		BotCheck();
		}

		determine = !determine
		if(Object.entries(emptyBoxes).length== 0 && TieDetermine == false){
			alert('A tie!')
		}
	}
}
function restartingGame(event){
	emptyBoxes = { "box1": 0, "box2": 0, "box3": 0 ,"box4": 0, "box5": 0, "box6": 0, "box7":0, "box8": 0,"box9":0};
	filledBoxes = [''];
	let boxes = document.getElementsByClassName("inlineBlock")
	for (let i = 0; i < boxes.length; i++){
		boxes[i].classList.remove("bot");
		boxes[i].classList.remove("player");
	}
}

boxesAll.onclick = function(event) {
	if (event.target != this) {selecting(event);}
}
restart.onclick = restartingGame;
// another method for determining player turns is by comparing two arrays length ( player1 array and bot array)