import { useRouter } from 'next/router'

const Review = () => {
  const router = useRouter()
  const { productId, reviewId } = router.query
  return (
    <>
      <h3>
        This is the review {reviewId} of the product {productId}
      </h3>
    </>
  )
}

export default Review
