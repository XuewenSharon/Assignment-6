"use strict";

$(document).ready( () => {
	const validEmail = sessionStorage.getItem("validEmail");
	const validPhone = sessionStorage.getItem("validPhone");
	const validZip = sessionStorage.getItem("validZip");
	const validDob = sessionStorage.getItem("validDob");

    $("#email").text(validEmail);
	$("#phone").text(validPhone);
	$("#zip").text(validZip);
	$("#dob").text(validDob);
	
	$("back").click( () => { history.back();
		
	});
	
}); // end of ready()