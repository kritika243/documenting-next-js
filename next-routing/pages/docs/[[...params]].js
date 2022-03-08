import { useRouter } from 'next/router'

const Docs = () => {
  const router = useRouter()
  // params will be an array of all the params in the url
  const { params = [] } = router.query
  return <h2>Docs home page {params[2]} </h2>
}

export default Docs
