$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var userInput = $("input#franklin").val();
	
		var pigLatin = [];

		var vowels = ["a", "e", "i", "o", "u"];
			
			if (vowels.includes(userInput.charAt(0))) {
			 $("#output").text(userInput + "way");

			} else if (userInput.charAt(0) !== vowel) {
				var separate = userInput.split("");
				var newSeparate = separate.shift() + "ay";
				var missing = separate.splice(0).join("") + newSeparate;
				// var final = missing.join("");
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