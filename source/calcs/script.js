// CAROUSEL
var list = document.querySelector(".carousel__list");
var currentPosition = 0;
var width = 315;
var elements = document.querySelectorAll('.carousel__item');

document.querySelector('.carousel__btn--prev').addEventListener('click', function() {
  currentPosition = Math.min(currentPosition + width, 0);
  list.style.marginLeft = currentPosition + "px";
});
document.querySelector('.carousel__btn--next').addEventListener('click', function() {
  currentPosition = Math.max(currentPosition - width, (elements.length-1)*-width);
  list.style.marginLeft = currentPosition + "px";
});


// DEPOSIT CALCULATOR
document.querySelector(".calc--deposit__button").addEventListener('click', function() {
	var deposit = document.querySelector(".calc--deposit__input--deposit").value;
	var percent = document.querySelector(".calc--deposit__input--percent").value;
  var capitalize = document.querySelector(".calc--deposit__capital");
  var day = ((deposit*(percent/365)/100)).toFixed(2);
  var month = ((deposit*(percent/12)/100)).toFixed(2);
  var year = ((deposit*percent)/100).toFixed(2);
	if (capitalize.checked) {
		year = (function(){
				var sum = deposit*(percent/12)/100;
				var depositNew = +deposit;
				for (var i=1; i<=12; i++) {
					sum = +(depositNew*(percent/12)/100).toFixed(2);
					depositNew += sum; 
				}
				return depositNew-deposit;
				}()).toFixed(2);
	}
	document.querySelector('.calc--deposit__sum-day').innerHTML = day;
	document.querySelector('.calc--deposit__sum-month').innerHTML = month;
  document.querySelector('.calc--deposit__sum-year').innerHTML = year;
});




// document.querySelector(".calc--deposit__button").addEventListener('click', function() {
// 	var deposit = document.querySelector(".calc--deposit__input--deposit").value;
// 	var percent = document.querySelector(".calc--deposit__input--percent").value;
// 	var day, month, year;
//   var capitalize = document.querySelector(".calc--deposit__capital");
  
// 	if (capitalize.checked) {
// 		day = ((deposit*(percent/365)/100)).toFixed(2);
// 		month = ((deposit*(percent/12)/100)).toFixed(2);
// 		year = (function(){
// 				var sum = deposit*(percent/12)/100,
// 				depositNew = +deposit;
// 				for (var i=1; i<=12; i++) {
// 					sum = +(depositNew*(percent/12)/100).toFixed(2);
// 					depositNew += sum; 
// 				}
// 				return depositNew-deposit;
// 				}()).toFixed(2);
// 	} else {
// 		day = ((deposit*(percent/365)/100)).toFixed(2);
// 		month = ((deposit*(percent/12)/100)).toFixed(2);
// 		year = ((deposit*percent)/100).toFixed(2);
// 	}
// 	document.querySelector('.calc--deposit__sum-day').innerHTML = day;
// 	document.querySelector('.calc--deposit__sum-month').innerHTML = month;
//   document.querySelector('.calc--deposit__sum-year').innerHTML = year;
// });