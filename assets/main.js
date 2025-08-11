// --- CONFIGURATION ---
// Set the date we're counting down to.
// The format is "Month Day, Year HH:MM:SS"
const countDownDate = new Date("Sep 7, 2025 00:11:00").getTime();

// --- SCRIPT LOGIC ---
// Get the element where the countdown will be displayed.
const countdownElement = document.getElementById("countdown");

// Update the countdown every 1 second.
const interval = setInterval(function () {
  // Get today's date and time (in milliseconds).
  const now = new Date().getTime();

  // Find the distance between now and the count down date.
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds.
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown".
  // We use padStart to ensure each number is two digits (e.g., 09 instead of 9).
  countdownElement.innerHTML = `${days}d ${String(hours).padStart(2, "0")}h ${String(
    minutes
  ).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;

  // If the count down is finished, write some text.
  if (distance < 0) {
    clearInterval(interval);
    countdownElement.innerHTML = "EXPIRED";
  }
}, 1000); // 1000ms = 1 second

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('confetti-button');
  
  button.addEventListener('click', () => {
    const confettiCount = 100;
    const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];

    for (let i = 0; i < confettiCount; i++) {
      const confettiPiece = document.createElement('div');
      confettiPiece.classList.add('confetti-piece');
      
      const buttonRect = button.getBoundingClientRect();
      // Start all pieces at the center of the button
      confettiPiece.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
      confettiPiece.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
      
      confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // --- THE FIX IS HERE ---
      // Calculate a random circular burst pattern
      const angle = Math.random() * 2 * Math.PI; // Random angle
      const distance = Math.random() * 150 + 50;  // Random distance from 50px to 200px
      
      const burstX = Math.cos(angle) * distance;
      const burstY = Math.sin(angle) * distance;

      // Set the custom properties for the CSS animation
      confettiPiece.style.setProperty('--burst-x', `${burstX}px`);
      confettiPiece.style.setProperty('--burst-y', `${burstY}px`);
      // --- END OF FIX ---
      
      confettiPiece.style.animationDelay = `${Math.random() * 0.2}s`;
      
      document.body.appendChild(confettiPiece);
      
      setTimeout(() => {
        confettiPiece.remove();
      }, 3000);
    }
  });
});