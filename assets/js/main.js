window.onload = function () {
	var goFullscreenButtons = document.getElementsByClassName('enter-fullscreen');
	var exitFullscreenButtons = document.getElementsByClassName('exit-fullscreen');

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

	var exitFullscreen = function () {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.mozExitFullscreen) {
			document.mozExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else {
			alert('Fullscreen no está permitido');
			return false;
		}
	};

	[].forEach.call(goFullscreenButtons, function(button) {
		button.addEventListener('click', function(e) {
			var parent = this.parentNode;
			var childNodes = parent.childNodes;
			var container;
			var fullscreenClassName = 'fullscreen-section-container';

			if (e.preventDefault) {
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

	[].forEach.call(exitFullscreenButtons, function(button) {
		button.addEventListener('click', function(e) {
			if (e.preventDefault) {
				e.preventDefault();
			}
			
			exitFullscreen();
		});
	});
};