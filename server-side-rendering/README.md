# Server Side Rendering with getServerSideProps

1.  getServerSide Props runs only on the server side
    The function will never run client-side
    The code you write inside getServerSide Props won't even be included in the JS bundle that is sent to the browser
2.  You can write server-side code directly in getServerSide Props
    oAccessing the file system using the fs module or querying a database can be done inside getServerSide Props
    You also don't have to worry about including API keys in getServerSide Props as that won't make it to the browser
3.  getServerSide Props is allowed only in a page and cannot be run from a regular component file.
    It is used only for pre-rendering and not client-side data fetching
4.  getServerSide Props should return an object and object should contain a props key which is an object
5.  getServerSide Props will run at request time
6.  You can extract a lot of things from the `context` object of getServerSideProps for eg
    `const { params, req, res, query } = context`
    `console.log(req.headers.cookie) res.setHeader('Set-Cookie', ['name = Joh Doe'])`
    ` console.log(query)`

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
