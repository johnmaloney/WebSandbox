 define(['jquery', 'geo/api'], function($, api){
 	$(document).ready(function(){

 		// Attach the submit event onto the forms button //
 		$('.load-postal').submit(function(e){

 			// STOP the typical events from occurring //
 			e.preventDefault();

 			// FIND the text input for the posta code //
 			var postalCode = $(this).find('input').val();

 			// FIND the list of results //
 			var list = $('.postal-codes').empty(),lis = [];

 			// IF the postal code is not entered then return //
 			if (postalCode === '') {
 				lis.push("<li> Postal Code not entered. </li>")
 				return list.append(lis);
 			}

 			// CALL the API to retrieve the results //
			api.postalCodes(postalCode)
				.done(function(codes){

 					console.log(codes.postalcodes[0].placeName);

 		 			for(var i = 0, il = codes.postalcodes.length; i < il; i++){
 			 			lis.push("<li>" +  codes.postalcodes[i].placeName + "</li>")
 			 		}; 			 	

 			 		list.append(lis);
 				});		
 		})
 	})
});