// A shitty saving solution, a really shitty one

function makeArray() {
	var string;
	var array;
	array = [
		document.getElementById('msg').value,
		document.getElementById('usr').value,
		document.getElementById('avt').value,
		document.getElementById('tts').value,
	];
	string = array.join("|");
	prompt("Aqui está sua string", string);
}

function loadArray() {
	var string;
	var array;
	string = prompt("Cole a string aqui");
	if (string === null) {
		return;
	}
	array = string.split("|");
	document.getElementById('msg').value = array[0];
	document.getElementById('usr').value = array[1];
	document.getElementById('avt').value = array[2];
	document.getElementById('tts').value = array[3];
	document.getElementById('tts').checked = array[3];
}
