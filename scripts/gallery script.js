var imgIndex = 1;
showImgs(imgIndex);

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

// Take in an integer, create variables for the images, icons, info, and tabs,
// set the image index, clear all the images and infos, remove the highlight,
// then set the correct image and info to show
function showImgs(n) {
	var i;
	var x = document.getElementsByClassName("gallery-img");
	//var icons = document.getElementsByClassName("gallery-icon");
	var info = document.getElementsByClassName("info");
	//var tablinks = document.getElementsByClassName("tab-link");

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