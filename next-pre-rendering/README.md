# Static Generation and Build

Page Size First Load JS
┌ ○ / 276 B 71.2 kB
├ /\_app 0 B 70.9 kB
├ ○ /404 194 B 71.1 kB
└ ● /users 354 B 71.3 kB

- First Load JS shared by all 70.9 kB
  ├ chunks/framework-5f4595e5518b5600.js 42 kB
  ├ chunks/main-a054bbf31fb90f6a.js 27.6 kB
  ├ chunks/pages/\_app-9cd1d19dd7237c4c.js 493 B
  ├ chunks/webpack-69bfa6990bb9e155.js 769 B
  └ css/27d177a30947857b.css 194 B

○ (Static) automatically rendered as static HTML (uses no initial props)
● (SSG) automatically generated as static HTML + JSON (uses getStaticProps)

## Imp points

- If you navigate directly to the page route, the HTML file is served
- If you navigate to a page route from a different route, the page is created client side using the JS and JSON pre fetched from the server -> no additional request to the server

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
