import type { SiteMeta } from 'astro-pure/types'

/** Page metadata for <head>. `articleDate` is the publish date; `modifiedDate` the last update. */
export interface PageMeta extends SiteMeta {
  modifiedDate?: string | undefined
  tags?: string[] | undefined
}
