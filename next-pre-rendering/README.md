# Fallback set to false in getStaticPaths

## Points

- use of getStaticProps to fetch data and then pass on to page as props
- use of getStaticPaths for dynamic SSG pages and their params eg [postId].js
- informing next js about the possible values of postId
- Dynamically fetching the possible values of post ids and passing to paths object in getStaticPaths

#### getStaticPaths and fallback : true

1. The paths returned from getStaticPaths will be rendered to HTML at build time by getstaticProps.
2. The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a "fallback" version of the page on the first request to such a path eg 'Loading...' in [postId].js.
   <br/>
   `for eg we have defined paths for postId - 1, 2, & 3 => we have posts/1, posts/2, posts/3 A request for a page which is not there at build time eg - posts/4 will have a fallback like here Loading and in the background Next.js will fetch the required data to render for postId - 4 using getStaticProps. Thus in the terminal you'll see generating page for /pots/4`
   <br/>
3. However in the background, Next.js will statically generate the requested path HTML and JSON. This includes running getStaticProps.
4. When that's done, the browser receives the JSON for the generated path. This will be used to automatically render the page with the required props. From the user's perspective, the page Will be swapped from the fallback page to the full page.
5. At the same time, Next.js keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.
6. For a 404 pae - i.e postId which does not actually exist and getStaticProps is not able to fetch - notFound can be set to true in getStaticProps
   `if (!data.id) { return { notFound: true, } }`
   This will render a 404 page after loading and trying to fetch and still not found.
   <br/>
7. When to use fallback:true => The true value is most suitable if your app has a very large number of static pages that depend on data.
   A large e-commerce site.
   You want all the product pages to be pre-rendered but if you have a few thousand products, builds can take a really long time.
   You may statically generate a small subset of products that are popular and use fallback: true for the rest.
   When someone requests a page that's not generated yet, the user will see the page with a loading indicator.
   Shortly after, getStaticProps finishes and the page will be rendered with the requested data. From then onwards, everyone who requests the same page will get the statically pre-rendered page This ensures that users always have a fast experience while preserving fast builds and the benefits of Static Generation

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
