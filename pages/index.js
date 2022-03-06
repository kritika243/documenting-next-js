import Link from 'next/link'

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link href='/blog'>
        <a>To the Blog</a>
      </Link>
      <Link href='/product'>
        <a>To the Products</a>
      </Link>
    </>
  )
}

export default Home
