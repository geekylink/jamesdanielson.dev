/**
 * Shape of the content used across the site. These are documentation for you and
 * your editor (hover hints); `npm run validate` checks the important parts.
 *
 * Inline text (paragraphs) supports a tiny bit of markup:
 *   [link text](https://example.com)   external link, opens in a new tab
 *   [link text](/education)            internal link
 *   **bold**
 */

/**
 * @typedef {Object} Link
 * @property {string} label
 * @property {string} url
 */

/**
 * @typedef {Object} TextBlock
 * @property {'text'} type
 * @property {string} [heading]
 * @property {string | string[]} body           Paragraph(s). Inline markup allowed.
 */

/**
 * @typedef {Object} ImagesBlock
 * @property {'images'} type
 * @property {string} [heading]
 * @property {{ src: string, alt: string, caption?: string }[]} items
 */

/**
 * @typedef {Object} VideoBlock
 * @property {'video'} type
 * @property {string} youtube                   YouTube video id, e.g. "t-PAIlWh2R4"
 * @property {string} title
 */

/**
 * @typedef {Object} Project
 * @property {string} slug                      URL id: lowercase letters, numbers, dashes. Must be unique.
 * @property {string} title
 * @property {'game' | 'website' | 'tool'} category   Add new categories in categories.js
 * @property {string} summary                   One or two sentences shown on the project list.
 * @property {number} [order]                   Lower numbers show first (default 100).
 * @property {boolean} [hidden]                 true = keep the file but do not show it on the site.
 * @property {string} [period]                  e.g. "2008 - 2011"
 * @property {string} [status]                  e.g. "Offline"
 * @property {string} [thumbnail]               Image URL or "/local.png" from /static
 * @property {string[]} [tags]
 * @property {Link[]} [links]
 * @property {(TextBlock | ImagesBlock | VideoBlock)[]} [blocks]   Detail page content, rendered in order.
 */

/**
 * @typedef {Object} Job
 * @property {string} id
 * @property {string} company
 * @property {string} location
 * @property {string} role
 * @property {string} start                     "YYYY-MM"
 * @property {string | null} end                "YYYY-MM", or null for a current job
 * @property {string[]} description             Paragraphs. Inline markup allowed.
 * @property {string[]} [tags]
 * @property {boolean} [alsoTeaching]           true = also listed under Teaching experience on the Education page
 */

export {};
