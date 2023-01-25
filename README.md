This is the code for https://jamesdanielson.com

This site is static build of a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

**Initialize:**

```bash
npm install
```

**Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build Static Site:

```bash
npm run build
```

Serve the files found in the `/out/*` folder.

**Note:** To run static builds of [Next.js](https://nextjs.org/) the '[package.json](https://github.com/geekylink/jamesdanielson.com/blob/main/package.json)' build line must inclue 'next export' like so:

```
"build": "next build && next export",
```

Certain functionality is not supported with static sites. Check out the [documentation](https://nextjs.org/docs/advanced-features/static-html-export) for details.

Image optimization was disabled in '[next.config.js](https://github.com/geekylink/jamesdanielson.com/blob/main/next.config.js)' for this reason as well.
