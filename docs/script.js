// Set your desired password here
const correctPassword = "secret123"; // Replace with your desired password

function checkPassword() {
  const input = document.getElementById("site-password").value;
  const error = document.getElementById("login-error");
  if (input === correctPassword) {
    // If password is correct, redirect to your main site or do something
    window.location.href = "content.html";
  } else {
    error.textContent = "Incorrect password. Please try again.";
  }
}

// Define each heart with its element, movement speed, current x position, and a target x position
const hearts = [
  { el: null, speed: 1.5, x: 0, target: 0 },
  { el: null, speed: 1.5, x: 0, target: 0 },
  { el: null, speed: 1.5, x: 0, target: 0 },
  { el: null, speed: 1.5, x: 0, target: 0 }
];

let containerWidth = 0;  // Width of the .heart-gallery container
let phase = 1;           // 1: slide to center, 2: slide to right & fade
let pauseStarted = false; // To ensure the pause is triggered only once
const fadeOffset = 50;   // Adjust this value to change where hearts begin to fade (higher = fade earlier)
let heartsFaded = 0;     // Count how many hearts have finished fading
let animationFrame;      // To store requestAnimationFrame ID

function initHearts() {
  const gallery = document.querySelector('.heart-gallery');
  containerWidth = gallery.offsetWidth;

  // Link each heart to its DOM element (ensure these IDs exist in your HTML)
  hearts[0].el = document.getElementById('heart1');
  hearts[1].el = document.getElementById('heart2');
  hearts[2].el = document.getElementById('heart3');
  hearts[3].el = document.getElementById('heart4');

  // Reset positions and opacity for all hearts
  hearts.forEach(heart => {
    heart.x = 0;
    heart.el.style.left = '0px';
    heart.el.style.opacity = '1';
  });
  heartsFaded = 0;
  pauseStarted = false;
  phase = 1;

  // Calculate target positions for each heart in the center (ensuring no overlapping)
  const numHearts = hearts.length;
  const heartWidth = 120; // Width of each heart (adjust if needed)
  const gap = 20;         // Gap between hearts
  const totalWidth = numHearts * heartWidth + (numHearts - 1) * gap;
  const startCenter = (containerWidth - totalWidth) / 2;

  for (let i = 0; i < numHearts; i++) {
    hearts[i].target = startCenter + i * (heartWidth + gap);
  }
}

function resetHearts() {
  hearts.forEach(heart => {
    heart.x = 0;
    heart.el.style.left = '0px';
    heart.el.style.opacity = '1';
  });
  heartsFaded = 0;
  pauseStarted = false;
  phase = 1;
}

function animateHearts() {
  if (phase === 1) {
    // Phase 1: Slide hearts to their center target positions
    let allReached = true;
    hearts.forEach(heart => {
      if (heart.x < heart.target) {
        heart.x += heart.speed;
        if (heart.x > heart.target) heart.x = heart.target;
        allReached = false;
      }
      heart.el.style.left = heart.x + 'px';
    });
    // When all hearts have reached their target, pause then switch to phase 2
    if (allReached && !pauseStarted) {
      pauseStarted = true;
      setTimeout(() => {
        phase = 2;
      }, 1000); // 1 second pause
    }
  } else if (phase === 2) {
    // Phase 2: Continue sliding to the right until fading occurs
    hearts.forEach(heart => {
      heart.x += heart.speed;
      heart.el.style.left = heart.x + 'px';

      // Fade condition: when the heart's right edge (x + width) minus fadeOffset reaches containerWidth
      if (heart.x + 120 - fadeOffset >= containerWidth && heart.el.style.opacity !== '0') {
        heart.el.style.opacity = '0';
        heart.el.addEventListener('transitionend', function handleFade() {
          heart.el.removeEventListener('transitionend', handleFade);
          heartsFaded++;
          if (heartsFaded === hearts.length) {
            // Once all hearts have faded, reset the animation after a short delay
            setTimeout(resetHearts, 300);
          }
        });
      }
    });
  }
  animationFrame = requestAnimationFrame(animateHearts);
}

// Start the animation when the page loads
window.addEventListener('load', () => {
  initHearts();
  animateHearts();
});
