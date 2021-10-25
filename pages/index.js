import Link from 'next/link'

const Home = (prop) => {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>{prop.message}</h2>
      <Link href='/products'>View All Products</Link>
    </div>
  )
}

// works on the server side, is used when page is not user specific
export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/test')
  const data = await res.json()
  console.log(data) // logged on the server console
  return {
    props: { message: data.message }, // will be passed to the page component as props
  }
}

export default Home
