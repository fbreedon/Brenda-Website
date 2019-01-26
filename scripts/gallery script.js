var imgIndex = 1;
var size = window.matchMedia("(max-width: 800px)");
// Run the gallery function only if the site isn't in mobile
switch (size.matches) {
	case true:
		break;
	case false:
		showImgs(imgIndex);
		break;
}

// Take in an integer and increase the image index that many times
// Used to scroll through the images
function plusImg(n) {
	showImgs(imgIndex += n);
}

// Take in an integer and set the image index equal to it
// Used to jump to an image
function currentImg(n) {
	showImgs(imgIndex = n);
}

// Show the responsive image grid when clicking on the center control
// overlay and hide the image gallery
function showGrid() {
	var gallery = document.getElementsByClassName("gallery-container")[0];
	var grid = document.getElementsByClassName("gallery-grid-container")[0];
	gallery.style.display = "none";
	grid.style.display = "block";
}

// Take in an integer and set variables. Set the image index, clear all the
// images and infos, then show the correct image and info by the index
function showImgs(n) {
	var i;
	var gallery = document.getElementsByClassName("gallery-container")[0];
	var grid = document.getElementsByClassName("gallery-grid-container")[0];
	var x = document.getElementsByClassName("gallery-img");
	var info = document.getElementsByClassName("info");

	// Set the gallery container to display if it has been hidden by the grid
	// and hide the grid
	if(gallery.style.display === "none") {
		gallery.style.display = "block";
		grid.style.display = "none";
	}

	// Loop back to the first image when clicking next on the last image
	if (n > x.length) {imgIndex = 1;}

	// Loop forward to the last image when clicking prev on the first image
	if (n < 1) {imgIndex = x.length;}

	// Set the display value for each image to "none"
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	// Set the display value for each info to "none"
	// This is a seperate function in case there is no info
	if(info.length > 0) {
		for (i = 0; i < info.length; i++) {
			info[i].style.display = "none";
		}
	}

	// Set the current image's display value to "block"
	x[imgIndex-1].style.display = "block";
	// Check that there is info, 
	// then set the current image's info display value to "block"
	if(info.length > 0) {info[imgIndex-1].style.display = "block";}
}