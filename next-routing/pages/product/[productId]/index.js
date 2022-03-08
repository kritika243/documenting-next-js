import { useRouter } from 'next/router'

const ProductDetail = () => {
  const router = useRouter()
  const productId = router.query.productId
  return <h4>details about the product {productId}</h4>
}

export default ProductDetail
