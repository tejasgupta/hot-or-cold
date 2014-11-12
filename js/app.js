$(document).ready(function(){
		
  var hiddenNumber = Math.floor((Math.random() * 100) + 1);
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("a.new").click(function(){
  		$("#guessList").find("li").remove();
  		$("#count").text("0");
  		$("#feedback").text("Make Your Guess!!");
      document.getElementById('userGuess').value = "";
      i = 0;
      hiddenNumber = Math.floor((Math.random() * 100) + 1);
  	});
  	// function to get user input value
  	var inputNum = function(){
		
		var guessNum = document.getElementById("userGuess").value;
		$("#guessList").append("<li>" + guessNum + "</li>");
		document.getElementById('userGuess').value = "";

  	};

  	var i = 0;

  	var count = function(){
  		$("#count").text(+ i);
  	};
  	
  	 var check = function(){
  		
  		var guessNum = document.getElementById("userGuess").value;
  		
  		if(!$.trim($('#userGuess').val())){
			alert('please enter valid item in inputbox');
		} else if (guessNum < 1) {
			alert('please enter valid item in inputbox');
  		} else if (guessNum > 100) {
  			alert('please enter valid item in inputbox');
  		} else if (guessNum > hiddenNumber && guessNum <= (hiddenNumber + 2)){
        $("#feedback").text("BOILING !!");
        i++;
        count();
        inputNum();
      } else if (guessNum > hiddenNumber && guessNum < (hiddenNumber + 5)){
        $("#feedback").text("VERY HOT !!");
        i++;
        count();
        inputNum();
      } else if (guessNum > hiddenNumber && guessNum < (hiddenNumber + 15)){
        $("#feedback").text("GETTING HOT !!");
        i++;
        count();
        inputNum();
      } else if (guessNum > hiddenNumber && guessNum < (hiddenNumber + 25)){
  			$("#feedback").text("HOT !!");
  			i++;
  			count();
  			inputNum();
  		} else if (guessNum < hiddenNumber && guessNum >= (hiddenNumber - 2)){
        $("#feedback").text("BOILING !!");
        i++;
        count();
        inputNum();
      } else if (guessNum < hiddenNumber && guessNum > (hiddenNumber - 5)){
        $("#feedback").text("VERY HOT !!");
        i++;
        count();
        inputNum();
      } else if (guessNum < hiddenNumber && guessNum > (hiddenNumber - 25)){
        $("#feedback").text("GETTING HOT !!");
        i++;
        count();
        inputNum();
      } else if (guessNum < hiddenNumber && guessNum > (hiddenNumber - 25)){
  			$("#feedback").text("HOT !!");
  			i++;
  			count();
  			inputNum();
  		} else if (guessNum >= (hiddenNumber + 25)){
  			$("#feedback").text("VERY COLD!!");
  			i++;
  			count();
  			inputNum();
  		} else if (guessNum <= (hiddenNumber - 25)){
  			$("#feedback").text("VERY COLD!!");
  			i++;
  			count();
  			inputNum();
  		} else {
  			$("#feedback").text("SPOT ON!!");
  			i++;
  			count();
  		};
  	};

  	$("#userGuess").on("keydown", function(e){
	  	if(e.which == 13){
	  		e.preventDefault();

	  		check();
	  	};
  	});

  	$("#guessButton").click(function(){
  		check();
  	});
});


