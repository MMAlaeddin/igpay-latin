$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var userInput = $("input#franklin").val();
	
		var pigLatin = [];

		var vowels = ["a", "e", "i", "o", "u"];
			vowels.forEach(function(vowel) {
			if (userInput.charAt(0) === vowel) {
			 $("#output").text(userInput + "way");

			} else if (userInput.charAt(0) !== vowel) {
				var separate = userInput.split("");
				var newSeparate = separate.shift() + "ay";
				var missing = separate.splice(0) + newSeparate;
				
				// separate.push(pigLatin);
					$("#output").text(missing);
				
			
			// } else if (userInput.charAt(0) !== vowel) {
			// 		var separate = userInput.split();
			// 		var vowelPlace = userInput.indexOf(vowels);
			// 		var newWord = separate.splice(0,vowelPlace);
			// 		alert(newWord)
		
			
			}
			});
		
	});
});