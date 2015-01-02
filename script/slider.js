var slider;
		var speed = 3000;
		var imageWidth = 720;


		function nextSlide(){
			var margin = parseInt($("#slides").css("margin-left")) - imageWidth;

			$("#slides").css("margin-left", margin+"px");
		}

		function startSlide(){
			slider = setInterval(function(){nextSlide();}, speed);
		}

		function stopSlide(){
			clearInterval(slider);
		}

		$(function() {
			startSlide();
			
		});