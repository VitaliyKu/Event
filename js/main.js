var div = document.getElementById('divny');
var text = document.getElementById('text');

addEventListener("keydown", function(event) {
	if (event.keyCode == 69 && event.ctrlKey){
		event.preventDefault();	
		text.classList.add("foo");
		div.classList.add("lore");
	}if (event.keyCode == 83 && event.ctrlKey){
		event.preventDefault();	
		var Ntext = document.getElementById('text').value;
		document.getElementById('divny').innerHTML = Ntext;
		div.classList.remove("lore");
		text.classList.remove("foo");
	} else if (event.keyCode == 27) {
		text.classList.remove("foo");
		div.classList.remove("lore");
		text.value = '';
	} 
});

