import Link from 'next/link'
const Home = () => {
  return (
    <>
      <h1>Next Pre rendering</h1>
      <Link href='/users'>
        <a>Go to users page</a>
      </Link>
      <hr />
      <Link href='/posts'>
        <a>All Posts</a>
      </Link>
    </>
  )
}

export default Home
