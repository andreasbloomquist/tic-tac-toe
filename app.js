window.addEventListener("load", function () {
	
	var board = document.querySelector('#board');
	var turns = 0;
	var reset = document.querySelector('#reset');
	var gameOver = false;
	var playerOneWins;
	var playerTwoWins;
	var rebel = "Three cheers for the Rebels. They have proven victorious over the Dark Side! Click reset to play again!";
	var dark = "The Dark Side has proven victorious once again. Perhaps with some better Jedi training you may prevail next time around. Click reset to play again!";

	var box1 = document.querySelector("#box1");
	var box2 = document.querySelector("#box2");
	var box3 = document.querySelector("#box3");
	var box4 = document.querySelector("#box4");
	var box5 = document.querySelector("#box5");
	var box6 = document.querySelector("#box6");
	var box7 = document.querySelector("#box7");
	var box8 = document.querySelector("#box8");
	var box9 = document.querySelector("#box9");	

	var checkWinner = function(){
	//Check row 1
		if (box1.classList.contains("Player1") && box2.classList.contains("Player1") && box3.classList.contains("Player1")) {
			alert(rebel);
			gameOver = true;
		} else if (box1.classList.contains("Player2") && box2.classList.contains("Player2") && box3.classList.contains("Player2")) {
			alert(dark);
			gameOver = true;
		}
		
	//Check row 2
		else if (box4.classList.contains("Player1") && box5.classList.contains("Player1") && box6.classList.contains("Player1")) {
			alert(rebel);
			gameOver = true;
		} else if (box4.classList.contains("Player2") && box5.classList.contains("Player2") && box6.classList.contains("Player2")) {
			alert(dark);
			gameOver = true;
		}

	//Check row 3
		else if (box7.classList.contains("Player1") && box8.classList.contains("Player1") && box9.classList.contains("Player1")) {
			alert(rebel);
			gameOver = true;
		} else if (box7.classList.contains("Player2") && box8.classList.contains("Player2") && box9.classList.contains("Player2")) {
			alert(dark);
			gameOver = true;
		}

	//Check Diagonals
		else if (box1.classList.contains("Player1") && box5.classList.contains("Player1") && box9.classList.contains("Player1") || box3.classList.contains("Player1") && box5.classList.contains("Player1") && box7.classList.contains("Player1")) {
			alert(rebel);
			gameOver = true;
		} else if (box1.classList.contains("Player2") && box5.classList.contains("Player2") && box9.classList.contains("Player2") || box3.classList.contains("Player2") && box5.classList.contains("Player2") && box7.classList.contains("Player2")) {
			alert(dark);
			gameOver = true;
		 }
	//Check horizontals
		else if (box1.classList.contains("Player1") && box4.classList.contains("Player1") && box7.classList.contains("Player1") || box3.classList.contains("Player1") && box6.classList.contains("Player1") && box9.classList.contains("Player1")) {
			alert(rebel);
			gameOver = true;
		} else if (box1.classList.contains("Player2") && box4.classList.contains("Player2") && box7.classList.contains("Player2") || box3.classList.contains("Player2") && box6.classList.contains("Player2") && box9.classList.contains("Player2")) {
			alert(dark);
			gameOver = true;
		 } 
	//Check middle
		 else if (box2.classList.contains("Player1") && box5.classList.contains("Player1") && box8.classList.contains("Player1") || box3.classList.contains("Player1") && box6.classList.contains("Player1") && box9.classList.contains("Player1")) {
		 	alert(rebel);
			gameOver = true;
		} else if (box2.classList.contains("Player2") && box5.classList.contains("Player2") && box8.classList.contains("Player2") || box3.classList.contains("Player2") && box6.classList.contains("Player2") && box9.classList.contains("Player2")) {
			alert(dark);
			gameOver = true;
		}
	}

	board.addEventListener("click", function (event) {
		if (event.target.classList.contains("clicked") === false && gameOver === false && event.target.classList.contains("box")){
			if (turns % 2 === 0){
				event.target.style.backgroundImage = "url('assets/luke.png')";
				event.target.classList.add("Player1");
				//event.target.innerHTML = "X";
				checkWinner();
			} else if (event.target.classList.contains("clicked") === false && gameOver === false) {
				event.target.style.backgroundImage = "url('assets/darth.png')";
				event.target.classList.add("Player2");
				//event.target.innerHTML = "O";
				checkWinner();
			}
				event.target.classList.add("clicked");
				turns += 1;
		}
	});	
	reset.addEventListener("click", function (event) {
		var isClicked = document.querySelectorAll(".clicked");
		for (var i = 0; i < isClicked.length; i++) {
			var resetBox = document.querySelector(".clicked");
			resetBox.style.backgroundImage = "url('')";
			resetBox.className = "box";
			resetBox.innerHTML = "&nbsp;";
			turns = 0;
			gameOver = false;
		}
	});
});