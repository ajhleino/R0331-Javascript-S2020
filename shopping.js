// shopping.js
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
	'use strict';

	// For storing the order total:
	var total;

    // Get references to the form values:
    var quantity = document.getElementById('quantity').value ;
    var price =  document.getElementById('price').value ;
    var tax =  document.getElementById('tax').value ;
    var discount =  document.getElementById('discount').value ;
		var shipping =  document.getElementById('shipping').value ;
	// Add validation here later!
	var maara=parseInt(quantity);
	var hinta=parseFloat(price);
	var vero=parseFloat(tax);
	var alennus=parseFloat(discount);
	var kuljetus=parseInt(shipping);
	// Calculate the initial total:
	total = maara * hinta;
	console.log("total before tax: " + total);

	// Make the tax rate easier to use:
	vero = vero / 100;
	vero = vero + 1;

	// Factor in the tax:
	total = total * vero;
	console.log("total after tax: " + total);

	// Factor in the discount:
	if(maara<101){
		total = total - alennus;
		console.log("total after discount: " + total);
	}else{
		total = total - alennus*2;
		console.log("total after discount: " + total);
	}

	//Factor in the Shipping
	if (total<100){
		total=total+kuljetus;
		console.log("total after shpping: " + total);
	}else{
		document.getElementById('shipping').value = 0;
		console.log("total after shpping: " + total);
	}

	// Format the total to two decimal places:
	total = total.toFixed(2);

	// Display the total:
	document.getElementById('total').value = total;

	// Return false to prevent submission:
	return false;

} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
	'use strict';

    // Add an event listener to the form:
    var theForm = document.getElementById('theForm');
    theForm.onsubmit = calculate;

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;
