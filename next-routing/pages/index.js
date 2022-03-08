import Link from 'next/link'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const handleClick = () => {
    alert('Order placed successfully, continue shopping?')
    router.push('/product')
  }
  return (
    <>
      <h1>Home page</h1>
      <Link href='/blog'>
        <a>To the Blog</a>
      </Link>
      <Link href='/product'>
        <a>To the Products</a>
      </Link>

      <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default Home
