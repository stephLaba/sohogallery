

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

// console.log($galleryImages);
//1. when user clicks on thumbnail show modal box
$galleryImages.on('click', function(e){


	e.preventDefault();
	var index = $galleryImages.index($(this));
	//Get full source
	var src = $(this).data('full');
	//Get full description
	var decp = $(this).data('desc')
	var wWidth = $(document).innerWidth();
	var wHeight = $(document).innerHeight();


	// $('.modalContent img').attr('src',src).data('index',index);

	$('.modalContent').css({
		// 'background':"url(" + src + ")",
		'backgroundPosition' : "50%",
		'backgroundSize' : "cover",
		'backgroundRepeat' : 'no-repeat',
		'min-height': wHeight,
		'min-width': wWidth
	}).data('index',index);
	
	$('.modalContent').removeClass('closed');

	$(".modalContent img").attr('src', src);

	$( ".modalContent img" ).mousemove(function( event ) {
	  var pageCoords = event.pageY;
	 console.log(pageCoords);
	 // $(this).css({
	 // 	'top': '10px',
	 // 	'backgroundPositionX': 50 +'%',
	 // 	'height': 'auto'

	 // 		})
		$(this).css('top', '0').css('top', '-=' + pageCoords + 'px' );
		});

	});

});





