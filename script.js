// Select Mars container and satellite
const marsContainer = document.querySelector('.mars-container');
const slidingText = document.getElementById("sliding-text");
const starsContainer = document.getElementById("stars-container");

// Add 150 blinking stars
for (let i = 0; i < 150; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  // Random position
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";

  // Random size
  const size = Math.random() * 2 + 1; // Between 1px and 3px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Add to container
  starsContainer.appendChild(star);
}

// Add scroll event listener
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Move Mars upward
  const newTop = 10 - scrollPosition * 0.1; // Adjust multiplier for speed
  marsContainer.style.top = `${newTop}%`;

  // Move the text from right to left
  const horizontalPosition = -scrollPosition * 2.5; // Negative value for leftward movement
  slidingText.style.transform = `translateX(${horizontalPosition}px)`;
});




let train = document.getElementById("train");
window.addEventListener("scroll",()=>{
  let value = window.scrollY;
  train.style.left = value * 0.1 + "px";
})
document.addEventListener('DOMContentLoaded', function() {
  const shakeGroups = document.querySelectorAll('g');

  const observerOptions = {
      threshold: 0.2 // Adjust this value as needed
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('shake'); // Keep shaking while visible
          } else {
              entry.target.classList.remove('shake'); // Stop shaking when out of view
          }
      });
  }, observerOptions);

  shakeGroups.forEach(group => observer.observe(group));
});
const rocket = document.querySelector(".rocket");

        // Set Initial Position Dynamically
        let startX = 80; // Adjust starting X percentage (0-100%)
        let startY = -150; // Adjust starting Y percentage (0-100%)

        rocket.style.left = `${startX}%`;
        rocket.style.bottom = `${startY}%`;

        window.addEventListener("scroll", function() {
            let scrollY = window.scrollY;

            let yOffset = -scrollY * 0.5;  // Moves up
            let xOffset = -scrollY * 0.5;  // Moves left

            rocket.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(45deg)`;
});



        window.addEventListener("scroll", function() {
            let scrollTop = window.scrollY;
            lastScrollY = scrollTop;

            let maxMoveUp = -200; // Max height rocket will move up
            let moveAmount = Math.max(Math.min(scrollTop * -0.3, maxMoveUp), 0);

            document.getElementById("s-launch-side1").style.transform = `translate(-50%, ${moveAmount}px)`;
        });
        let lastScrollY = window.scrollY;
        let rocketContainer = document.getElementById("rocketContainer");
        let smokeCircles = document.querySelectorAll(".smoke circle");

        window.addEventListener("scroll", function() {
            let currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scroll down → Rocket launches and smoke appears
                rocketContainer.style.transform = "translate(-50%, -200px)";
                smokeCircles.forEach(circle => {
                    circle.style.opacity = "1";
                });
            } else {
                // Scroll up → Rocket returns and smoke fades
                rocketContainer.style.transform = "translate(-50%, 0)";
                smokeCircles.forEach(circle => {
                    circle.style.opacity = "0";
                });
            }

            lastScrollY = currentScrollY;
        });

        document.addEventListener("DOMContentLoaded", () => {
            const satellite = document.querySelector('.satellite');
            const mars = document.querySelector('.mars');
          
            // Earth's orbit duration (10 seconds)
            const earthOrbitTime = 10000;
          
            // Timing to move the satellite to Mars (e.g., exactly after Earth's orbit)
            setTimeout(() => {
              // Move the satellite towards Mars
              satellite.style.transition = 'all 1.5s ease-in-out'; // Faster transition
              satellite.style.top = '50%'; // Align with Mars
              satellite.style.left = '50%'; // Align with Mars
          
              // Attach the satellite to Mars' orbit
              setTimeout(() => {
                mars.appendChild(satellite); // Attach satellite to Mars
                satellite.style.transition = 'none'; // Remove the transition
                satellite.style.transform = 'translate(-50%, -200%)'; // Position for orbit
                satellite.style.animation = 'rotate-satellite-mars 5s linear infinite'; // Mars orbit animation
              }, 1500); // Wait for transition to complete (1.5 seconds)
            }, earthOrbitTime); // Trigger movement after Earth's orbit duration (10 seconds)
          });
          
          window.addEventListener('scroll', function() {
            const text = document.getElementById('end');
            const scrollPosition = window.scrollY; // Get current scroll position
            const windowHeight = window.innerHeight; // Get the height of the viewport
      
            // Calculate the amount to slide the text based on scroll position
            const slideValue = (scrollPosition / windowHeight) * 100; // Adjust the 100 for desired speed
      
            // Apply the slide effect, ensuring the text stops at the right side of the viewport
            text.style.left = `calc(-100% + ${slideValue}%)`;
          });
      