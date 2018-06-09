		/*
		GAME RULES:

		- The game has 2 players, playing in rounds
		- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
		- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
		- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
		- The first player to reach 100 points on GLOBAL score wins the game

		*/
		'use strict'

		let scores, roundScore, activePlayer;

		scores = [0,0];
		roundScore = 0;
		activePlayer = 0;


		//document.querySelector('btn-new').addEventListener('click', function(){


		//EventListener takes two arguments, first is the event(action)
		//second is the function called when the button is clicked
		document.querySelector('.btn-roll').addEventListener('click', function(){

			//Varaible to keep track of the number rolled
			let dice = Math.ceil(Math.random()*6);

			//Changes the image based on number rolled
			let dieImage = document.querySelector('.dice');
			dieImage.style.display = 'block';
			dieImage.src = 'dice-' + dice + '.png';

			if(dice === 1){
				nextPlayer();
			} else {
				roundScore += dice;
				document.querySelector('#current-' + activePlayer).textContent = roundScore;
			}


		});


		document.querySelector('.btn-hold').addEventListener('click', function(){

				scores[activePlayer] += roundScore;
				document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
				winGame();
				

		});


		function nextPlayer(){

				if(activePlayer === 0){
					activePlayer++;

				} else {
					activePlayer--;
				}	

				roundScore = 0;
				document.querySelector('#current-0').textContent = 0;
				document.querySelector('#current-1').textContent = 0;

				document.querySelector('.player-0-panel').classList.toggle('active');
				document.querySelector('.player-1-panel').classList.toggle('active');


				//document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
				//document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');


		}

		function winGame(){

			let temp = document.querySelector('#score-' + activePlayer).textContent;

			if(temp >= 100){
				document.querySelector('#name-' + activePlayer).textContent 
				= ('WINNER!');
			} else { 
				nextPlayer();
			}
		}

		document.querySelector('btn-new').addEventListener('click', function(){

			document.querySelector('#current-0').textContent = 0;
			document.querySelector('#current-1').textContent = 0;
			document.querySelector('#score-0').textContent = 0;
			document.querySelector('#score-1').textContent = 0;


		});




