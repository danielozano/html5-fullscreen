window.onload = function () {
	var fullScreenButtons = document.getElementsByTagName('button');
	
	var inArray = function (needle, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == needle) {
				return true;
			}
		}
		return false;
	};

	var goFullscreen = function (element) {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullscreen();
		} else if (element.mozRequestFullscreen) {
			element.mozRequestFullscreen();
		} else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		} else {
			alert('Fullscreen no está permitido');
			return false;
		}
	};

	[].forEach.call(fullScreenButtons, function(button) {
		button.addEventListener('click', function(e) {
			var parent = button.parentNode;
			var childNodes = parent.childNodes;
			var container;
			var fullscreenClassName = 'fullscreen-section-container';
			if (e.preventDefault()) {
				e.preventDefault();
			}

			[].forEach.call(childNodes, function(node) {
				if (undefined !== node.classList) {
					if (inArray(fullscreenClassName, node.classList)) {
						goFullscreen(node);
					}
				}
			}); // end forEach

		}); // end addEventListener
	}); // end forEach

};