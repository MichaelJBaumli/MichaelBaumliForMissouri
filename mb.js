let currentYear;
let date;
let year;


$(document).ready(function(){
	currentYear = document.getElementById('current_year');
	date = new Date();
	year = date.getFullYear();
  currentYear.innerText = '© ' + year;
});