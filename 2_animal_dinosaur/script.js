window.onload = function(){
	
	var width = jQuery(window).width();
	$('.1, .2, .3, .4').hide();

	jQuery( window ).resize( function() {
		//alert('test');
		var width = jQuery(window).width();

		if(width >= 1400){
			$('h1').text('The Secret History of Restored Dinosaur');
			$('.1, .2, .3, .4').hide();
		}

		if(width < 1400 && width > 1200){
			$('h1').text("This is what we learned as a tyrannosaur");
			$('.1').show();
			$('.2, .3, .4').hide();
		}
		if(width < 1200 && width > 1100){
			$('h1').text("New dinosaur research changed a image of dinosaur");
			$('.2').show();
			$('.1, .3, .4').hide();
		}
		if(width < 1100 && width > 900){
			$('h1').text("Chaos");
			$('.2').show();
			$('.1, .3, .4').hide();
		}

		if(width < 900 && width > 600){
			$('h1').text("Pandemonium");
			$('.1, .2, .4').hide();
			$('.3').show();
		}

		if(width < 600 ){
			$('h1').text("dinasaur<3");

			$('.1, .2, .3').hide();
			$('.4').show();
		}



	

	});
};