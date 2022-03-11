# Static Generation and data

- use of _getStaticProps_ : returns an object
  - getStaticProps works only on the server side
  - that is why console.log logs in the terminal and not in the browser console
  - the function will never run on the client side
  - the code written in the getStaticProps function won't even be included in the JS bundle that is sent to the browser
- You can write server side code directly in _getStaticProps_
  - Since content in getStaticProps does not reach browser, you don't have to worry about API keys
- _getStaticProps_ is allowed only in a page and cannot be used through components / component files
  - it is used only for pre-rendering and not for client side data fetching
- _getStaticProps_ should always return an object
  `return { props: { users : data, }, }`
- _getStaticProps_ runs at build time, however while developing _getStaticProps_ runs for every request

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
