$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var userInput = $("input#franklin").val();
		
		var pigLatin = [];

		if (userInput.charAt(0) === "a","e","i","o","u") {
			 $("#output").text(userInput + "way");
		}

	});
});