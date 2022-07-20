"use strict";

const isDate = text => 
{
    if ( ! /^[01]?\d\/[0-3]\d\/\d{4}$/.test(text) ) { return false; }

	const index1 = text.indexOf( "/" );
	const index2 = text.indexOf( "/", index1 + 1 );
	const month = parseInt( text.substring( 0, index1 ) );
	const day = parseInt( text.substring( index1 + 1, index2 ) );
	
	if( month < 1 || month > 12 ) 
    { 
		return false; 
	} 
    else 
    {
        switch(month) 
        {
            case 2:
                return (day > 28) ? false : true;
            case 4:
            case 6:
            case 9:
            case 11:
                return (day > 30) ? false : true;
            default:
                return (day > 31) ? false : true;
        }
    }
};


$(document).ready( () => {
    $( "#save" ).click( () => {
        $("span").text("");   // clear any previous error messages
        let isValid = true;   // initialize isValid flag
        
        const email = $("#email").val();
        const phone = $("#phone").val();
        const zip = $("#zip").val();
        const dob = $("#dob").val();

        
        if ( email === "" || !email.match(emailPattern ) )
        {
            isValid = false;
            $("#email").next().text(`Please enter a valid email`);
        }
        if ( phone === "" || !phone.match(phonePattern) ) 
        {
            isValid = false;
            $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format.");
        }
        if ( zip === "" || !zip.match(zipPattern) ) 
        {
            isValid = false;
            $("#zip").next().text("Please enter a valid zip code.");
        }
        if ( dob === "" || !isDate(dob) ) 
        {
            isValid = false;
            $("#dob").next().text("Please enter a valid date in MM/DD/YYYY format.");
        }
        
        if (isValid) 
        { 
            sessionStorage.setItem("validEmail", email);
            sessionStorage.setItem("validPhone", phone);
            sessionStorage.setItem("validZip", zip);
            sessionStorage.setItem("validDob", dob);
            location = "profile.html";
        }
        
        $("#email").focus(); 
    });


    // Set focus on initial load
    $("#email").focus();
}); 