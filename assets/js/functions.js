// toggle mygtukas
const toggleButton = document.getElementById('toggle-theme');

// local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
}

// event
toggleButton.addEventListener('click', () => {
  const isDarkMode = document.body.classList.contains('dark-theme');

  if (isDarkMode) {
    // ligth mode
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light'); 
  } else {
    // dark mode
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
});


// Laikrodis
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Laikrodzio updater
function updateClock() {
  const clockElement = document.getElementById('clock');
  clockElement.textContent = getCurrentTime();
}

setInterval(updateClock, 1000);
updateClock(); 
