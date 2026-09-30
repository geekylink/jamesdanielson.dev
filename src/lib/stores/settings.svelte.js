import { browser } from '$app/environment';

export const THEMES = [
  { id: 'green', label: 'green', color: '#6dffb0' },
  { id: 'amber', label: 'amber', color: '#ffb000' },
  { id: 'ice', label: 'ice', color: '#7ad7ff' }
];

/** Display settings, remembered in localStorage. app.html applies them before first paint. */
class Settings {
  theme = $state('green');
  crt = $state(true);

  /** Sync with what app.html already applied to <html>. Call once on mount. */
  init() {
    if (!browser) return;
    this.theme = document.documentElement.dataset.theme || 'green';
    this.crt = document.documentElement.dataset.crt !== 'off';
  }

  /** @param {string} id */
  setTheme(id) {
    this.theme = id;
    this.#save('theme', id);
    document.documentElement.dataset.theme = id;
  }

  toggleCrt() {
    this.crt = !this.crt;
    this.#save('crt', this.crt ? 'on' : 'off');
    document.documentElement.dataset.crt = this.crt ? 'on' : 'off';
  }

  #save(/** @type {string} */ key, /** @type {string} */ value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* storage can be blocked; the setting still applies for this visit */
    }
  }
}

export const settings = new Settings();
