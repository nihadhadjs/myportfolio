const body = document.body;
const toggleBtn = document.getElementById('toggleBtn');
function setTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = '☀️';
    toggleBtn.setAttribute('aria-label', 'Switch to light mode');
  } else {
    body.classList.remove('dark');
    toggleBtn.textContent = '🌙';
    toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
  }
  localStorage.setItem('theme', theme);
}
// Initialize theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}
toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});
