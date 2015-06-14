$(function() {

	var images = [
		".image1",
		".image2",
		".image3",
		];

		 function getRandomNumber(n){
		         var n = Math.floor(Math.random()*n);
		         return n;
		      }

		//randomly choose an animation in array
		      function getRandomImage(){
		       var num = getRandomNumber(images.length);
		       return images[num];
		      };

		      console.log(getRandomImage());

	var interval = setInterval(addZ, 3000);


	function addZ(){
		$(getRandomImage()).toggleClass("z3");

	}




	
});