/** "2021-11" -> "November 2021" */
export function formatMonth(/** @type {string} */ ym) {
  const [y, m] = ym.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** ("2021-11", null) -> "November 2021 - Present" */
export function formatRange(/** @type {string} */ start, /** @type {string | null} */ end) {
  return `${formatMonth(start)} - ${end ? formatMonth(end) : 'Present'}`;
}
