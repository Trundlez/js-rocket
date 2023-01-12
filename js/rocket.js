var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = "body-state" + state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById("countdown").innerHTML = countdownNumber;

	if (state == 2) {
		timer = setInterval(function () {countdownNumber = countdownNumber -1;
			document.getElementById("countdown").innerHTML = countdownNumber;
			//get fucking rekt innerHTML, you suck, thanks, kbai
			if(countdownNumber >4 && countdownNumber <= 7) {
				//be nervous
				document.getElementById("nervous").className = "nervous show";
			} else{
				document.getElementById("nervous").className = "nervous"
			}

			if (countdownNumber >1 && countdownNumber <= 4) {
				//I can't wait
				document.getElementById("cant-wait").className = "cant-wait show";
			} else{
				document.getElementById("cant-wait").className = "cant-wait";
			}

			if (countdownNumber <= -1) {
				changeState(3);
			};
		}, 1000);
	} else if (state == 3) {
		var success = setTimeout(function(){
			var randomNumber = Math.round(Math.random()*10);

			console.log("randomNumber: " ,
				randomNumber)

			if (randomNumber > 5) {
				changeState(4)
			} else {
				changeState(5)

			}
		}, 2000)
	};
}