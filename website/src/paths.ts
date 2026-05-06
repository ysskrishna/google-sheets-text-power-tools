/** Base URL path with exactly one trailing slash (e.g. `/google-sheets-text-power-tools/`). */
export const siteBasePath = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
