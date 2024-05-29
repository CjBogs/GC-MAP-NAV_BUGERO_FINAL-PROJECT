

var links = document.querySelectorAll('.showImageLink');
var images = document.querySelectorAll('.image');

for (var i = 0; i < links.length; i++) {
links[i].addEventListener('click', function(e) {
e.preventDefault();
     
     
for (var j = 0; j < images.length; j++) {
images[j].style.display = 'none';
}
  
var index = parseInt(this.getAttribute('data-index'));
images[index].style.display = 'block';
});
}