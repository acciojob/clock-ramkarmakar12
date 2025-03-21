//your JS code here. If required.
let time = document.getElementById("timer");

let currentDate = new Date();

setInterval(
	function(){
		 currentDate = new Date();
		time.innterHtml= currentDate.toLocaleString();
	},
	1000
)
