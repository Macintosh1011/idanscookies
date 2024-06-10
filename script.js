const star = document.getElementById('star');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

function animateStar() {
  const starX = parseFloat(star.style.left || mouseX);
  const starY = parseFloat(star.style.top || mouseY);

  // Calculate the distance to move
  const dx = (mouseX - starX) * 0.1;
  const dy = (mouseY - starY) * 0.1;

  // Move the star closer to the cursor
  star.style.left = starX + dx + 'px';
  star.style.top = starY + dy + 'px';

  requestAnimationFrame(animateStar);
}

// Initialize the star position and start the animation
star.style.left = mouseX + 'px';
star.style.top = mouseY + 'px';
animateStar();