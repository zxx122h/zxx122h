(() => {
  const storageKey = 'bingchen-academic-theme';
  const themes = new Set(['system', 'light', 'dark']);
  const control = document.querySelector('#theme');

  function applyTheme(theme) {
    if (theme === 'system') {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = theme;
    }
  }

  let savedTheme;
  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch {
    // The control still works for this visit when storage is unavailable.
  }

  control.value = themes.has(savedTheme) ? savedTheme : 'system';
  applyTheme(control.value);
  control.closest('.theme-control').hidden = false;

  control.addEventListener('change', () => {
    applyTheme(control.value);
    try {
      localStorage.setItem(storageKey, control.value);
    } catch {
      // The active theme has already been applied.
    }
  });
})();
