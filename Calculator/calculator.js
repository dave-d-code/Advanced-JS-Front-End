
var operator,
	tempnums = "",
	nums = [],
	total = 0;
	

// needs zero button
// needs to sum up to allow chaining
// CSS needs dealing with
// needs work. but is good start
// to many global variables being operated on by functions.
// this all needs a rethink.????
// perhaps even have a calculator constructor and do it OOP style??


$(function() {
	display(total);

	$('.num-btn').click(function() {

		tempnums += $(this).val();
		display(tempnums);
	});

	// needs work. chaining works. but value needs to be stored to carry on operations
	// go through the methodlogy again.
	$('.num-op').click(function() { 
		nums.push(parseFloat(tempnums));
		tempnums = "";
		if (nums.length >=2) {
			nums[0] = calculate(operator, nums);
			nums.splice(1, 1);
		}
		operator = $(this).val();
	});

	$('#btn-calc').click(function() {
		nums.push(parseFloat(tempnums));
		tempnums = "";
		total = calculate(operator, nums);
		display(total);
	});

	$('#btn-clear').click(function() {
		resetAll();
	});
});

// needs default senario
function calculate(operator, myArray) {
	switch(operator) {
		case 'plus': return myArray[0] + myArray[1]; break;
		case 'minus': return myArray[0] - myArray[1]; break;
		case 'times': return myArray[0] * myArray[1]; break;
		case 'divide': return myArray[0] / myArray[1]; break;
	}
}

function resetAll() { 
	operator = "";
	tempnums = ""
	nums = [];
	total = 0;
	display(total);
}

function display(outstr) {
	$('#output').html(outstr);
}

// need something like together with a "c" button
function resetTempnums() {
	tempnums = "";
}