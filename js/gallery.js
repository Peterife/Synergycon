// Lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Open lightbox on image click
galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    lightbox.style.display = 'flex';
    lightboxImg.src = this.src;  // Set lightbox image source
    caption.textContent = this.alt;  // Set caption text
  });
});

// Close lightbox when clicking the cancel (close) icon
closeBtn.addEventListener('click', function() {
  lightbox.style.display = 'none';  // Hide the lightbox
});

// Optionally: Close lightbox when clicking anywhere outside the image (on the dark overlay)
lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';  // Close lightbox if clicked outside the image
  }
});
