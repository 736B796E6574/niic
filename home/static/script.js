window.onload = function() {
    
    var images = ['../static/hero__2.jpg', '../static/hero__3.jpg', '../static/hero__4.jpg', '../static/hero__5.jpg'];  // Array containing images
var index = 0;

function changeImage() {
  var img = document.getElementById('slider-image');
  img.src = images[index];
  index = (index + 1) % images.length; // Move to the next image. Loop back to the first image if we've reached the end.
}

// Change the image every 5 seconds
setInterval(changeImage, 5000);

}



