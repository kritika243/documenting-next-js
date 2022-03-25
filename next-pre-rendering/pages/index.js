import Link from 'next/link'
const Home = () => {
  return (
    <>
      <h1>Next Pre rendering</h1>
      <Link href='/users'>
        <a>Go to users page</a>
      </Link>
    </>
  )
}

export default Home
