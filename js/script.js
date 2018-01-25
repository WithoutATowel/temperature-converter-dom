function cToFConverter(unit, temp) {
	var convertedTemp = 0;
	if (unit === 'celcius') {
		convertedTemp = Math.round(temp * 9 / 5 + 32);
	} else if (unit === 'farenheit') {
		convertedTemp = Math.round((temp - 32) * 5 / 9);
	}
	return convertedTemp;
}

document.getElementById("conversionForm").addEventListener("submit", function(e) {
	e.preventDefault();
	document.getElementById('submit').click();
})

document.getElementById('submit').addEventListener('click', function(){
	var unit = '';
	if(document.getElementById('celcius').checked) {
		unit = 'celcius';
	} else if(document.getElementById('farenheit').checked) {
		unit = 'farenheit';
	}
	var temp = document.forms['conversionForm']['temp'].value;
	var newTemp = cToFConverter(unit, temp);
	var result = document.getElementById('result');
	if (unit === 'celcius') {
		result.innerHTML = newTemp + "&#8457;";
		if (newTemp > 100) { 
			result.style.background = "red"; 
		} else if (newTemp < 32) {
			result.style.background = "lightblue"; 
		}
	} else {
		result.innerHTML = newTemp + "&#8451;";
		if (newTemp > 38) { 
			result.style.background = "red"; 
		} else if (newTemp < 0) {
			result.style.background = "lightblue"; 
		}
	}
})

document.getElementById("clear").addEventListener("click", function() {
	document.getElementById("temp").value = "";
	document.getElementById("result").innerHTML = "";
	result.style.background = "";
})

