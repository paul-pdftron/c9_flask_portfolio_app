var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");

if (!!loginButton) {
	loginButton.onclick = function(){
		document.querySelector("#flipper").classList.toggle("flip");
	}
}

if (!!registerButton) {
	registerButton.onclick = function(){
		document.querySelector("#flipper").classList.toggle("flip");
	}
}
