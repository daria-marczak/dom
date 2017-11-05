var button = document.getElementsByClassName("button");

console.log(button);

var buttonString = button.toString();

for (i = 0; i < button.length; i++) {
	alert(buttonString.innerText);
}
