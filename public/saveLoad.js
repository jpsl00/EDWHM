// A shitty saving solution, a really shitty one

function saveJSON() {
	var json = {
		'content':document.getElementById("msg").value,
		'username':document.getElementById("usr").value,
		'avatar_url':document.getElementById("avt").value,
		'tts':document.getElementById("tts").value,
		'hook':document.getElementById("hook").value,
	};
	return JSON.stringify(json)
}

function loadJSON() {
	var json = JSON.parse(prompt());
	if (json === null) {return}
	document.getElementById('msg').value = json.content;
	document.getElementById('usr').value = json.username;
	document.getElementById('avt').value = json.avatar_url;
	document.getElementById('tts').value = json.tts;
	if(json.tts == "true"){
		document.getElementById('tts').checked = 1;
	}else if(json.tts == "false"){
		document.getElementById('tts').checked = 0;
	};
	document.getElementById('hook').value = json.hook;
}
