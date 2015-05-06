//window.addEventListener("load", function () {
$(window).load(function() {
	//var board = document.querySelector('#board');
	var $board = $('#board');
	//var turns = 0;
	var $turns = 0;
	//var reset = document.querySelector('#reset');
	var $gameOver = false;
	var $playerOneScore = 0;
	var $playerTwoScore = 0;


	// var rebel = "Three cheers for the Rebels. They have proven victorious over the Dark Side! Click reset to play again!";
	// var dark = "The Dark Side has proven victorious once again. Perhaps with some better Jedi training you may prevail next time around. Click reset to play again!";
	var $rebel = "Three cheers for the Rebels. They have proven victorious over the Dark Side! Click reset to play again!";
	var $dark = "The Dark Side has proven victorious once again. Perhaps with some better Jedi training you may prevail next time around. Click reset to play again!";

	// var box1 = document.querySelector("#box1");
	// var box2 = document.querySelector("#box2");
	// var box3 = document.querySelector("#box3");
	// var box4 = document.querySelector("#box4");
	// var box5 = document.querySelector("#box5");
	// var box6 = document.querySelector("#box6");
	// var box7 = document.querySelector("#box7");
	// var box8 = document.querySelector("#box8");
	// var box9 = document.querySelector("#box9");	
	var $box1 = $("#box1");
	var $box2 = $("#box2");
	var $box3 = $("#box3");
	var $box4 = $("#box4");
	var $box5 = $("#box5");
	var $box6 = $("#box6");
	var $box7 = $("#box7");
	var $box8 = $("#box8");
	var $box9 = $("#box9");

	var $setwinner = function(player){
		if (player == 1){
			$playerOneScore += 1;
			$('#player1').html("Player one score: " + $playerOneScore);
			alert($rebel);
		} else {
			$playerTwoScore += 1;
			$('#player2').html("Player two score: " + $playerTwoScore);
			alert($dark);

		}
		return $gameOver = true;
	}

	var $resetGame = function(){
		var $resetBox = $(".clicked");
		$resetBox.css("backgroundImage", "url('')");
		$resetBox.removeClass("Player1").removeClass("Player2").removeClass("clicked");
		$turns = 0;
		$gameOver = false;
	}


    // I'll admit this code is horrendous, and perhaps even vomit inducing...
	// var checkWinner = function(){
	// //Check row 1
	// 	if (box1.classList.contains("Player1") && box2.classList.contains("Player1") && box3.classList.contains("Player1")) {
	// 		alert(rebel);
	// 		gameOver = true;
	// 	} else if (box1.classList.contains("Player2") && box2.classList.contains("Player2") && box3.classList.contains("Player2")) {
	// 		alert(dark);
	// 		gameOver = true;
	// 	}
		
	// //Check row 2
	// 	else if (box4.classList.contains("Player1") && box5.classList.contains("Player1") && box6.classList.contains("Player1")) {
	// 		alert(rebel);
	// 		gameOver = true;
	// 	} else if (box4.classList.contains("Player2") && box5.classList.contains("Player2") && box6.classList.contains("Player2")) {
	// 		alert(dark);
	// 		gameOver = true;
	// 	}

	// //Check row 3
	// 	else if (box7.classList.contains("Player1") && box8.classList.contains("Player1") && box9.classList.contains("Player1")) {
	// 		alert(rebel);
	// 		gameOver = true;
	// 	} else if (box7.classList.contains("Player2") && box8.classList.contains("Player2") && box9.classList.contains("Player2")) {
	// 		alert(dark);
	// 		gameOver = true;
	// 	}

	// //Check Diagonals
	// 	else if (box1.classList.contains("Player1") && box5.classList.contains("Player1") && box9.classList.contains("Player1") || box3.classList.contains("Player1") && box5.classList.contains("Player1") && box7.classList.contains("Player1")) {
	// 		alert(rebel);
	// 		gameOver = true;
	// 	} else if (box1.classList.contains("Player2") && box5.classList.contains("Player2") && box9.classList.contains("Player2") || box3.classList.contains("Player2") && box5.classList.contains("Player2") && box7.classList.contains("Player2")) {
	// 		alert(dark);
	// 		gameOver = true;
	// 	 }
	// //Check horizontals
	// 	else if (box1.classList.contains("Player1") && box4.classList.contains("Player1") && box7.classList.contains("Player1") || box3.classList.contains("Player1") && box6.classList.contains("Player1") && box9.classList.contains("Player1")) {
	// 		alert(rebel);
	// 		gameOver = true;
	// 	} else if (box1.classList.contains("Player2") && box4.classList.contains("Player2") && box7.classList.contains("Player2") || box3.classList.contains("Player2") && box6.classList.contains("Player2") && box9.classList.contains("Player2")) {
	// 		alert(dark);
	// 		gameOver = true;
	// 	 } 
	// //Check middle
	// 	 else if (box2.classList.contains("Player1") && box5.classList.contains("Player1") && box8.classList.contains("Player1") || box3.classList.contains("Player1") && box6.classList.contains("Player1") && box9.classList.contains("Player1")) {
	// 	 	alert(rebel);
	// 		gameOver = true;
	// 	} else if (box2.classList.contains("Player2") && box5.classList.contains("Player2") && box8.classList.contains("Player2") || box3.classList.contains("Player2") && box6.classList.contains("Player2") && box9.classList.contains("Player2")) {
	// 		alert(dark);
	// 		gameOver = true;
	// 	}
	// }

// Refactoring win conditions to two separate functions for player 1 and player 2 so that I only need to check if one player won per turn

	var $checkWinnerOne = function(){
		//Check row 1 for player1
		if ($box1.hasClass("Player1") && $box2.hasClass("Player1") && $box3.hasClass("Player1")) {
			return $setwinner(1);
		//Check row 2 for player1
		} else if ($box4.hasClass("Player1") && $box5.hasClass("Player1") && $box6.hasClass("Player1")) {
			return $setwinner(1);
		//Check row 3 for player1
		} else if ($box7.hasClass("Player1") && $box8.hasClass("Player1") && $box9.hasClass("Player1")) {
			return $setwinner(1);		
		//Check column 1 for player1
		} else if ($box1.hasClass("Player1") && $box4.hasClass("Player1") && $box7.hasClass("Player1")) {
			return $setwinner(1);
		//Check column 2 for player1
		} else if ($box2.hasClass("Player1") && $box5.hasClass("Player1") && $box8.hasClass("Player1")) {
		 	return $setwinner(1);
		//Check column 3 for player1
		} else if ($box3.hasClass("Player1") && $box6.hasClass("Player1") && $box9.hasClass("Player1")) {
			return $setwinner(1);
		//Check Diagonals 1 for player1
		} else if ($box1.hasClass("Player1") && $box5.hasClass("Player1") && $box9.hasClass("Player1") || $box3.hasClass("Player1") && $box5.hasClass("Player1") && $box7.hasClass("Player1")) {
			return $setwinner(1);
		};
	};

	var $checkWinnerTwo = function(){
		//Check row1 player2
		if ($box1.hasClass("Player2") && $box2.hasClass("Player2") && $box3.hasClass("Player2")) {
			return $setwinner();
		//Check row2 player2	
		} else if ($box4.hasClass("Player2") && $box5.hasClass("Player2") && $box6.hasClass("Player2")) {
			return $setwinner();
		//Check row3 player2
		} else if ($box7.hasClass("Player2") && $box8.hasClass("Player2") && $box9.hasClass("Player2")) {
			return $setwinner();
		//Check column 1 player 2	
		} else if ($box1.hasClass("Player2") && $box4.hasClass("Player2") && $box7.hasClass("Player2")) {
			return $setwinner();
		//Check middle player2
		} else if ($box2.hasClass("Player2") && $box5.hasClass("Player2") && $box8.hasClass("Player2")) {
			return $setwinner();
		//check column 3 player2
		} else if ($box3.hasClass("Player2") && $box6.hasClass("Player2") && $box9.hasClass("Player2")) {
			return $setwinner();
		//Check Diagonals player2
		} else if ($box1.hasClass("Player2") && $box5.hasClass("Player2") && $box9.hasClass("Player2") || $box3.hasClass("Player2") && $box5.hasClass("Player2") && $box7.hasClass("Player2")) {
			return $setwinner();
		};
	};

	//board.addEventListener("click", function (event) {
	$('#board').click(function(event) {
		//if (event.target.classList.contains("clicked") === false && gameOver === false && event.target.classList.contains("box")){
		if ($(event.target).hasClass("clicked") === false && $gameOver === false && $(event.target).hasClass("box")){
			if ($turns % 2 === 0){
				//event.target.style.backgroundImage = "url('assets/luke.png')";
				$(event.target).css("backgroundImage", "url('assets/luke.png')");
				//event.target.classList.add("Player1");
				$(event.target).addClass("Player1");
				$checkWinnerOne();
			} else if ($(event.target).hasClass("clicked") === false && $gameOver === false) {
				//event.target.style.backgroundImage = "url('assets/darth.png')";
				//event.target.classList.add("Player2");
				$(event.target).css("backgroundImage", "url('assets/darth.png')");
				$(event.target).addClass("Player2");
				$checkWinnerTwo();
			};
			//event.target.classList.add("clicked");
				$(event.target).addClass("clicked");
				$turns += 1;
		};
	});	

	//reset.addEventListener("click", function (event) {
	$('#reset').click(function (event) {	
		//for (var i = 0; i < isClicked.length; i++) {
			//var resetBox = document.querySelector(".clicked");
			//resetBox.style.backgroundImage = "url('')";			
			//resetBox.className = "box";
			return $resetGame();
	});
});