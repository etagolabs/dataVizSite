// theme.js
const THEME_KEY = "etago_theme";

function applyStoredTheme() {
  const root = document.documentElement;
  let theme = localStorage.getItem(THEME_KEY);

  if (!theme) {
    // Fall back to system preference if nothing saved yet
    const prefersDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    theme = prefersDark ? "dark" : "light";
  }

  root.setAttribute("data-theme", theme);
}

document.addEventListener("DOMContentLoaded", applyStoredTheme);
