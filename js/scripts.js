$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var userInput = $("input#franklin").val();
	
		var pigLatin = [];

		var vowels = ["a", "e", "i", "o", "u"];
			vowels.forEach(function(vowel) {
			if (userInput.charAt(0) === vowel) {
			 $("#output").text(userInput + "way");
			}
			});
		// } else {
		// 	$("#output").text(userInput);
		
		// } else(userInput.charAt(0) !== "a","e","i","o","u") {
		// 		var separate = userInput.split();
		// 		var move = separate.splice(userInput.length -1, 0, separate.charAt(0));
		// 		$("#output").text(move);
		// }

	});
});