import Link from 'next/link'
const Product = () => {
  return (
    <div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <ul>
        <h2>
          <Link href='/product/1'>
            <a>View Product 1</a>
          </Link>
        </h2>
        <h2>
          <Link href='/product/2'>
            <a>View Product 2</a>
          </Link>
        </h2>
        <h2>
          <Link href='/product/3' replace>
            <a>View Product 3</a>
          </Link>
        </h2>
      </ul>
    </div>
  )
}

export default Product
