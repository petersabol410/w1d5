var multiplicationTable = function(maxValue) {
  var number = maxValue;
  var result = "";

  for (var i = 1; i <= maxValue; i++) {
  	for ( var j = 1; j <= maxValue; j++ ) {
  		result += (i*j) + " ";
  	}
  		result += "\n";
  }
  return result;
} 	

console.log(multiplicationTable(5));


