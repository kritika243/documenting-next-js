# Static Generation and Issues

1. The build time is proportional to the number of pages in the application

- Example Scenario
  A page takes 100ms to build.
  E-commerce app with 100 products takes 10 seconds to build.
  E-commerce app with 100,000 products takes> 2.5 hours to build.
  It's not just the time, there are cost implications as well.
  The problem only gets worse with more products you add to the system as every new page increases the overall build time.
  What if we build the app only once in a while?
  Depending on the nature of your application, you might run into the issue of stale data.
  E-commerce app is not an application which you can build and deploy once in a while. Product details, especially product prices can vary everyday.
  The entire app has to be re-built and the page with updated data will be statically generated.
- What about getStaticPaths?
  Pre-render only renders few pages at build time and rest of the pages can be pre-rendered on request
  Can we not use that to render say 1000 most popular pages and rest of the 99000 pages can be pre-rendered on request
  If your application has 90% static pages and 10% dynamic pages, getStaticPaths will not help much
  `But An e-commerce site typically will have 90% dynamic pages and 10% static pages, so we reduce the total build time by using getstaticPaths. It still does not fix the issue of stale data If you render 1000 pages at build time, and then the rest are generated based on incoming request, using fallback true or fallback 'blocking', changes in data will not update the already pre-rendered pages`

2. A page, once generated, can contain stale data till the time you rebuild the application

# Incremental Static Regeneration

There was a need to update only those pages which needed a change without having to rebuild the entire app

### Incremental Static Regeneration (ISR)

With ISR, Next.js allows you to update static pages after you've built your application
You can statically generate individual pages without needing to rebuild the entire site, effectively solving the issue of dealing with stale data
`How? In the getStaticProps function, apart from the props key, we can specify a revalidate key, The value for revalidate is the number of seconds after which a page re-generation can occur`

- On first re-load page after the re-validate time has finished -> regeneration gets triggered (regeneration is happening in the background) and you'll still see the stale data / content on page -> on another re-load -> updated data gets shown.

- Note
- `A re-generation is initiated only if a user makes a request after the revalidate time If a user visits our product details page but there is no other user hitting that page the entire day, the re-generation does not happen Revalidate does not mean the page automatically re-generates every 10 seconds It simply denotes the time after which, if a user makes a request, a re-generation has to be initiated The re-generation can also fail and the previously cached HTML could be served till the subsequent re-generations succeed`

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
