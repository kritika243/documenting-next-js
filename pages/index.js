import Link from 'next/link'

const Home = ({ products }) => {
  const productList = products.map((product) => {
    return (
      <div className='card hoverable' key={product._id}>
        <div className='card-image'>
          <img className='responsive-img' src={product.mediaUrl} />
          <span className='card-title'>{product.name}</span>
        </div>
        <div className='card-content'>
          <p>Rs {product.price}</p>
        </div>
        <div className='card-action'>
          <a href='#'>View Details</a>
        </div>
      </div>
    )
  })

  // console.log(products)
  return (
    <>
      <h3 className='center-align'>Shop from our collection...</h3>
      <div className='rootCard'>{productList}</div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  return {
    props: {
      products: data,
    },
  }
}

export default Home
