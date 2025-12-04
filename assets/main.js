// --- CONFIGURATION ---
// Set the date we're counting down to for Oakland Pride 2026
// Format: "Month Day, Year HH:MM:SS"
const countDownDate = new Date("2026-09-06T11:00:00").getTime();

// --- MODERN INTERSECTION OBSERVER ---
// Fade in sections as they scroll into view
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all fade-in sections
  document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
  });
});

// --- COUNTDOWN TIMER ---
// Update the countdown every 1 second
const countdownElement = document.getElementById("countdown");

if (countdownElement) {
  const interval = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));  
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    countdownElement.innerHTML = `
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <div><strong>${days}</strong> days</div>
        <div><strong>${String(hours).padStart(2, "0")}</strong> hours</div>
        <div><strong>${String(minutes).padStart(2, "0")}</strong> minutes</div>
        <div><strong>${String(seconds).padStart(2, "0")}</strong> seconds</div>
      </div>
    `;

    // If the count down is finished
    if (distance < 0) {
      clearInterval(interval);
      countdownElement.innerHTML = "<span style='font-size: 2rem;'>🏳️‍🌈 It's Pride Time! 🏳️‍⚧️</span>";
    }
  }, 1000);
}

// --- CONFETTI CELEBRATION ---
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('confetti-button');
  
  if (button) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      const confettiCount = 150;
      const colors = [
        '#ff0000', '#ff8c00', '#ffff00', 
        '#008026', '#0000ff', '#800080',
        '#5bcefa', '#f5a9b8', '#ffffff'
      ];

      for (let i = 0; i < confettiCount; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        
        const buttonRect = button.getBoundingClientRect();
        confettiPiece.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
        confettiPiece.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
        
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random circular burst pattern
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 200 + 100;
        
        const burstX = Math.cos(angle) * distance;
        const burstY = Math.sin(angle) * distance;

        confettiPiece.style.setProperty('--burst-x', `${burstX}px`);
        confettiPiece.style.setProperty('--burst-y', `${burstY}px`);
        
        confettiPiece.style.animationDelay = `${Math.random() * 0.2}s`;
        
        document.body.appendChild(confettiPiece);
        
        setTimeout(() => {
          confettiPiece.remove();
        }, 3500);
      }
      
      // Add celebration haptic feedback if available
      if (navigator.vibrate) {
        navigator.vibrate([50, 100, 50]);
      }
    });
  }
});

// --- SMOOTH SCROLLING FOR ANCHOR LINKS ---
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});


function showFullscreen(imgElement) {
    // Create the overlay div
    const overlay = document.createElement('div');
    
    // Style the overlay
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';
    overlay.style.cursor = 'pointer';

    // Create the image element for the fullscreen view
    const fullscreenImage = document.createElement('img');
    fullscreenImage.src = imgElement.src;
    
    // Style the fullscreen image
    fullscreenImage.style.maxWidth = '90%';
    fullscreenImage.style.maxHeight = '90%';
    fullscreenImage.style.objectFit = 'contain';

    // Add the image to the overlay
    overlay.appendChild(fullscreenImage);

    // Add the overlay to the document body
    document.body.appendChild(overlay);

    // Add an event listener to the overlay to remove it when clicked
    overlay.onclick = function() {
        document.body.removeChild(overlay);
    };
}