// // Be sure to use descriptive names for variables!!
// function convertToNumber () {
// 	var userInput = $('#temperature').val();
// 	userInput = parseFloat(userInput);
// 	return userInput;
// }



function clear() {
	$('#tempMarkerF, #labelsC, #tempMarkerC, #labelsF, #alert').hide();
}

function convertToNumber(userInput) {
	result = $('#temperature').val();
	result = parseFloat(result);
	return result;
}

function convertToC(userInput) {
	result = (( userInput - 32) / 1.8);
	result = result.toFixed(0);
	return result
}

function convertToF(userInput) {
	result = (1.8 * userInput + 32);
	result = result.toFixed(0);
	return result
}

function mercuryLevel(tempF) {
	var mercuryLevel = 359 - tempF*3.4334;
	return mercuryLevel;
}

var numericExpression = /^[0-9]+$/;

// when the user clicks on the fahrenheit to celsius button
$('#fahrenheit_to_celsius').on('click', function() {
	if (document.getElementById('temperature').value.match(numericExpression)) {
	clear();
	// Grab the value that the user entered into the input and convert to number
	var userInput = convertToNumber(userInput);
	// Convert to celsius	
	var celsius = convertToC(userInput);
	// Display value for user	
	$('#result').html(userInput + "&deg;F is equal to " + celsius + "&deg;C");
	// Clear input
	$('#temperature').val('');
	// Set position of the mecuryLevel
	var mecuryLevel = mercuryLevel(userInput);

	if (mecuryLevel > 10) {
		$("#mercuryClip").attr('y', mercuryLevel(userInput));
		//Set position of the temperature marker
		$("#currentTempMarkC").attr('y1', mercuryLevel(userInput)).attr('y2', mercuryLevel(userInput));
		// Set position of the currentTempC text
		$("#currentTempC").attr('y', mercuryLevel(userInput) + 8);
	} else { //fix clip to stay in svg window
		$("#mercuryClip").attr('y', 10);
		//Set position of the temperature marker
		$("#currentTempMarkC").attr('y1', 10).attr('y2', 10);
		// Set position of the currentTempC text
		$("#currentTempC").attr('y', 10 + 8);
		//Special message for extreme temp
		$('#result').append("<p class='hot'>Phew! that's hot!</p>");
	}
	
	// Print the currentTempC text
	$('#currentTempC').html(celsius + "&deg;C");
	// Show marker for converted temp and labels for original temp
	$('#tempMarkerC, #labelsF').show();
	}
	else {
		clear();
		$("#mercuryClip").attr('y', 400);$("#mercuryClip").attr('y', 400);	
		$('#result').html('');
		$('#alert').show();
	}
});



// when the user clicks on the celsius to fahrenheit button
$('#celsius_to_fahrenheit').on('click', function(){
	if (document.getElementById('temperature').value.match(numericExpression)) {
	clear();
	// Grab the value that the user entered into the input and convert value to floating number
	var userInput = convertToNumber(userInput);
	// Convert to farenheit	
	var fahrenheit = convertToF(userInput);
	// Display value for user	
	$('#result').html(userInput + "&deg;C is equal to " + fahrenheit + "&deg;F");
	// Clear input
	$('#temperature').val('');
	
	var mecuryLevel = mercuryLevel(fahrenheit);
	// Set position of the mecuryLevel
	if (mecuryLevel > 10) {
		$("#mercuryClip").attr('y', mercuryLevel(fahrenheit));
		//Set position of the temperature marker
		$("#currentTempMarkF").attr('y1', mercuryLevel(fahrenheit)).attr('y2', mercuryLevel(fahrenheit));
		// Set position of the currentTempC text
		$("#currentTempF").attr('y', mercuryLevel(fahrenheit) + 8);
	} else { //fix clip to stay in svg window
		$("#mercuryClip").attr('y', 10);
		//Set position of the temperature marker
		$("#currentTempMarkF").attr('y1', 10).attr('y2', 10);
		// Set position of the currentTempF text
		$("#currentTempF").attr('y', 10 + 8);
		//Special message for extreme temp
		$('#result').append("<p class='hot'>Phew that's hot!</p>");
	}
	// Print the currentTempF text
	$('#currentTempF').html(fahrenheit + "&deg;F");
	// Show marker for converted temp and labels for original temp
	$('#tempMarkerF, #labelsC').show();
	}
	else {
		clear();
		$("#mercuryClip").attr('y', 400);
		$('#result').html('');
		$('#alert').show();
	}
});



