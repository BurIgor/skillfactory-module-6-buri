let fbtn1 = document.getElementById('btn1');
let fbtn3 = document.getElementById('btn3');
let fbtn7 = document.getElementById('btn7');
let fbtnm1 = document.getElementById('btnm1');
let fbtnm3 = document.getElementById('btnm3');
let fbtnm7 = document.getElementById('btnm7');
let progressBar = document.getElementById('my-proress-bar');

let progr = progressBar.style.width;
progr = +progr.substr(0, progr.length-1);

fbtn1.onclick = function(e) {
	e.preventDefault();
	addProgress(+fbtn1.alt);
}

fbtn3.onclick = function(e) {
	e.preventDefault();
	addProgress(+fbtn3.alt);
}

fbtn7.onclick = function(e) {
	e.preventDefault();
	addProgress(+fbtn7.alt);
}

fbtnm1.onclick = function(e) {
	e.preventDefault();
	addProgress(-(+fbtnm1.alt));
}

fbtnm3.onclick = function(e) {
	e.preventDefault();
	addProgress(-(+fbtnm3.alt));
}

fbtnm7.onclick = function(e) {
	e.preventDefault();
	addProgress(-(+fbtnm7.alt));
}

function addProgress(increment) {
	progr += increment;
	if(progr > 100) 
		progr = 100;
	if(progr < 0) 
		progr = 0;
	progressBar.style.width = progr + '%';	
	progressBar.innerHTML = progr + '%';
}