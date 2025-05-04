document.querySelector('.buttonFlip').addEventListener('click', () => {
const cards = document.querySelectorAll('#pageDua .cards');
cards.forEach((card, i) => {
    setTimeout(() => {
    card.classList.toggle('flipped');
    }, i * 300);
});
});


const pages = document.querySelectorAll('[id^="page"]');
let currentPage = 0;

function showNextPage() {
const current = pages[currentPage];
const next = pages[currentPage + 1];

if (!next) return;

current.style.opacity = '0';
current.style.visibility = 'hidden';

setTimeout(() => {
    current.style.display = 'none';

    next.style.display = 'flex';
    next.style.opacity = '0';
    next.style.visibility = 'visible';

    requestAnimationFrame(() => {
    next.style.opacity = '1';
    });

    currentPage++;
}, 500);
}

document.querySelectorAll('.next').forEach(btn => {
btn.addEventListener('click', showNextPage);
});


document.querySelector('.buttonFlipTwo').addEventListener('click', () => {
const letters = document.querySelectorAll('#pageTiga .letters');
letters.forEach((letter, i) => {
    setTimeout(() => {
    letter.classList.toggle('flipped');
    }, i * 300);
});
});


window.addEventListener('DOMContentLoaded', () => {
const container = document.getElementById('hearts-container');
const main = document.getElementById('mainContent');

for (let i = 0; i < 40; i++) {
    const heart = document.createElement('div');
    heart.classList.add('intro-heart');
    heart.innerText = '💖';

    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = '0px';
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.style.animationDelay = `${Math.random() * 1}s`;

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
      }, 7000);
      
}

// Show main content after hearts float
setTimeout(() => {
    main.style.opacity = '1';
}, 7200);
});

const floatingHearts = document.getElementById('floating-hearts-bg');
const emojis = ['💖', '🎉', '💘', '🎁', '💓', '💞', '✨'];

function spawnHeart() {
  const heart = document.createElement('div');
  heart.classList.add('bg-heart');
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  
  // Randomize position, size, speed
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 16 + 16 + 'px';
  heart.style.animationDuration = (Math.random() * 5 + 5) + 's'; // 5–10s duration
  heart.style.animationDelay = '0s';
  
  floatingHearts.appendChild(heart);

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, 11000); // max duration + buffer
}

// Spawn new heart every 300ms
setInterval(spawnHeart, 300);

const page = document.getElementById('pageEmpat');
const noBtn = page.querySelector('.no');
const yesBtn = page.querySelector('.yes');
const heart = page.querySelector('#heartBackground');

let clickCount = 0;
const maxClicks = 7;

// Make "No" button run away
document.addEventListener('mousemove', (e) => {
  const rect = noBtn.getBoundingClientRect();
  const distance = 100;

  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;

  const deltaX = btnX - mouseX;
  const deltaY = btnY - mouseY;
  const distanceToMouse = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  if (distanceToMouse < distance) {
    const moveX = deltaX / distance * 150;
    const moveY = deltaY / distance * 150;
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  } else {
    noBtn.style.transform = `translate(0, 0)`;
  }
});

// Handle "Yes" button clicks
yesBtn.addEventListener('click', () => {
  clickCount++;
  const scale = 1 + clickCount * 0.5;
  heart.style.transform = `translate(-50%, -50%) scale(${scale})`;

  if (clickCount >= maxClicks) {
    yesBtn.classList.remove('yes');
    yesBtn.classList.add('next');
    yesBtn.textContent = 'yes!';

    // Move to next page
    showNextPage();
  }
});


window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bgMusic');
  function startMusic() {
    audio.play().catch((e) => {
      console.log("Autoplay blocked:", e);
    });
    document.removeEventListener('click', startMusic);
  }

  document.addEventListener('click', startMusic);
});

const pageLima = document.getElementById('pageLima');

pageLima.addEventListener('click', () => {
  showNextPage();
});