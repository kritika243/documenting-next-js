# API Routes

Next JS is a full stack framework
You can write the FE code in React and also write APls that can be called by the front end code
APl routes allow you to create RESTful endpoints as part of your Next.js application folder structure
Within the pages folder, you need to create a folder called 'api'
Within that 'api' folder, you can define all the APIs for your application
You can add business logic without needing to write any additional custom server code and without having to configure any API routes
Next JS gives you everything you need to write full-stack React + Node applications

## Summary of API Routes feature

APl routing mechanism is similar to page based routing mechanism
APls are associated with a route based on their file name
Every API route exports a default function typically named as handler function
The handler function receives the request and response as parameters
Cater to different request types like GET and POST using req.method
Dynamic API routes
Catch alI API routes
How to handle a DELETE request
`We should not call our own API routes for pre-rendering content`

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
