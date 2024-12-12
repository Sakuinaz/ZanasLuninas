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
