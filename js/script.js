$(function() {

	//array of images

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

	//set interval of changing z-index

	var interval = setInterval(addZ, 3000);

//add z-index to image
	function addZ(){
		$(getRandomImage()).toggleClass("z3");

	}

var $galleryImages = $('.thumbnail a');

var wWidth = $(window).innerWidth();

	// console.log($galleryImages);
	//1. when user clicks on thumbnail show modal box
	$galleryImages.on('click', function(e){
		e.preventDefault();
		var index = $galleryImages.index($(this));
		//Get full source
		var src = $(this).data('full');


		$('.modalContent').css('background-image',"url(" + src + ")").data('index',index);

		$('.modalContent').css("width",wWidth);

			// $(window).mousemove(function(e) {
		 //    $("html, body").scrollTop(function() {
		 //    	console.log("hello");
   //      	var h = $(window).height();
   //      	var y = e.clientY - h / 2;
   //      	return y;

		 //    });

		    $(document).on('mousemove', function(e){
		    	var mousePos = (e.clientY/$(window).height())*1000;
		    	$('.modalContent').css('backgroundPosition', mousePos+'px');
		    }); 


		$('.modalContent').removeClass('closed');

		});
		
	});


	// 	$('.selected').removeClass('selected');
	// 	$(this).addClass('selected');
	// 	console.log('selected!');

	// //2. have modal box get full-size image
	// 	// the second src (without apostrophes) is the variable

	// 	var $minHeight = 800;
	// 	var $height = $('.modal').height();
	// 	if ( $('.modal').$height > $minHeight) {
	// 		$(this).css("width", "40%");
	// 	}

	// 	console.log('imagessssss');
	// });





