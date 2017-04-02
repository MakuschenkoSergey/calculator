
'use strict';

// console.log($.fn.jquery);
// console.log('ok');

$(document).ready(function (){

  var price = {
    bond : 19.9,
		winston : 25,
		lm : 21,
		camel : 26,
		marlboro : 28,
		parlament : 35
	};

  $("#mark").change(function () {
		var mark = $('#mark').val();
		console.log(mark);
  });

  var quantity = 0;
  $("#quantity").change(function () {
    quantity = $("#quantity").val();
    console.log(quantity);
  });

  var period = {
  	week : 7,
		month: 30,
		season : 90,
		year : 360
	};

	var result = 0;
  $("#btn").click(function (){
		result = price[mark.value] * (quantity / 20) * 7;
		$("#result").val(Math.round((result*100)/100));
  });

});