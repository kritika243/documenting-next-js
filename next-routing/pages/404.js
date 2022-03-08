import Link from 'next/link'
function PageNotFound() {
  return (
    <>
      <h3>
        Sorry this page does not exist, go to
        <br />
        <Link href='/'>Home Page</Link>
      </h3>
    </>
  )
}

export default PageNotFound
