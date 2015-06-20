window.onload = function () {
    //Create snap environment
    var s = Snap('#svg');


	//load external svg file
	Snap.load("images/baron1898.svg", function (response) {
	    var baron = response; 

		//add the svg to the page
		s.append(baron);	


		//start of transform for the cart
		var cart = s.select('#Cart');
			cartStartMatrix = new Snap.Matrix(),
			cartMidMatrix = new Snap.Matrix();

			// Sets up the start matrix transforms
			cartStartMatrix.rotate(0);
			cartStartMatrix.translate(70,0);
			// Sets up the middle matrix transforms
			cartMidMatrix.rotate(0);
			cartMidMatrix.translate(175,400);


			cart.animate({
			  	transform: cartStartMatrix }, 
			  	1250, mina.linear, function () {
		  			
		  			cart.animate({
		    			transform: cartMidMatrix }, 
		    			800, mina.easeout);
    		});



		//spinning wheel function
	function wheelSpin() {
		var spinningWheel = s.select('#Wheel');
		//reset
		spinningWheel.transform('r0,286,146');
		//animate
		spinningWheel.animate({
			transform: 'r359,286,146'},
			5000, mina.linear, wheelSpin);
		}
		wheelSpin();


	});
}