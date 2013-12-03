define(['jquery'], function($) {

	return { 
		postalCodes: function(postalCode){

			return $.getJSON('http://api.geonames.org/postalCodeLookupJSON?formatted=true&postalcode=' 
			+ postalCode + '&username=maloney1&style=full');
			
		}
	}
})