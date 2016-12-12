
var operator,
	nums = [],
	total = 0;

$(function() {
	$('.num-btn').click(function() {
		nums.push(parseInt($(this).val()));
	});

	$('.num-op').click(function() {
		operator = $(this).val();
	});

	$('#btn-calc').click(function() {
		total = calculate(operator, nums);
		$('#output').html(total);
	});
});

function calculate(operator, myArray) {
	switch(operator) {
		case 'plus': return myArray[0] + myArray[1]; break;
		case 'minus': return myArray[0] - myArray[1]; break;
	}
}

// $(function() {
// 	$('.btn').click(function() {
// 		var num = $(this).val();
// 		$('#output').html(num);
// 	});
// });