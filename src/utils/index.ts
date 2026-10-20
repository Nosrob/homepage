/**
 * Public URL of a page. `build.format: 'file'` renders `/about.html` and `/index.html`, but GitHub
 * Pages serves them as `/about` and `/`, which is what the sitemap and shared links must use.
 */
export function publicURL(url: URL, site: URL | undefined): URL {
  const path = url.pathname.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '')
  return new URL(path, site)
}
