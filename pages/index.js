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

export default Home
