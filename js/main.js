const screenEl = document.getElementById('screen');
const consoleEl = document.getElementById('console');
const cartridgeGrid = document.getElementById('cartridgeGrid');
const cartridges = Array.from(cartridgeGrid.querySelectorAll('.cartridge'));
const resetBtn = document.getElementById('resetBtn');

let currentScreen = 'boot';
let selectedIndex = 0;

function showScreen(name) {
  if (name === currentScreen) return;
  currentScreen = name;

  document.querySelectorAll('.game-screen').forEach((el) => {
    el.classList.toggle('active', el.dataset.screen === name);
  });

  screenEl.classList.remove('flicker');
  // eslint-disable-next-line no-unused-expressions
  screenEl.offsetWidth; // restart animation
  screenEl.classList.add('flicker');

  if (name === 'menu') {
    updateCartridgeSelection();
  }
}

function updateCartridgeSelection() {
  cartridges.forEach((card, i) => {
    card.classList.toggle('selected', i === selectedIndex);
  });
}

function activateSelectedCartridge() {
  const card = cartridges[selectedIndex];
  if (card) showScreen(card.dataset.target);
}

// Cartridge click + hover
cartridges.forEach((card, i) => {
  card.addEventListener('click', () => {
    selectedIndex = i;
    showScreen(card.dataset.target);
  });
  card.addEventListener('mouseenter', () => {
    selectedIndex = i;
    updateCartridgeSelection();
  });
});

// Back buttons
document.querySelectorAll('[data-back]').forEach((btn) => {
  btn.addEventListener('click', () => showScreen('menu'));
});

// Reset button: always returns to the title screen
resetBtn.addEventListener('click', () => showScreen('boot'));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (currentScreen === 'boot') {
    showScreen('menu');
    return;
  }

  if (currentScreen === 'menu') {
    if (e.key === 'ArrowRight') {
      selectedIndex = (selectedIndex + 1) % cartridges.length;
      updateCartridgeSelection();
    } else if (e.key === 'ArrowLeft') {
      selectedIndex = (selectedIndex - 1 + cartridges.length) % cartridges.length;
      updateCartridgeSelection();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      activateSelectedCartridge();
    }
    return;
  }

  // On a content screen
  if (e.key === 'Escape' || e.key === 'Backspace') {
    e.preventDefault();
    showScreen('menu');
  }
});

// Boot screen: click anywhere to continue too
document.getElementById('screen-boot').addEventListener('click', () => {
  if (currentScreen === 'boot') showScreen('menu');
});

// Typing effect for the boot subtitle
const subtitleText = 'NETWORKED SYSTEMS EDITION';
const typedEl = document.getElementById('typedSubtitle');

if (typedEl) {
  let i = 0;
  const type = () => {
    typedEl.textContent = subtitleText.slice(0, i);
    i++;
    if (i <= subtitleText.length) {
      setTimeout(type, 80);
    }
  };
  type();
}

// Footer / copyright years
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

updateCartridgeSelection();
