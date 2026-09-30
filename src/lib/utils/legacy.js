import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

/**
 * Old site URLs (/who, /jobs, /games/merge ...) still work: they redirect to the new pages.
 * @param {string} to
 */
export const legacyRedirect = (to) => () => redirect(308, `${base}${to}`);
