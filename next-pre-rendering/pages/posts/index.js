import Link from 'next/link'

function PostsList({ posts }) {
  return (
    <>
      <h3>Posts</h3>
      {posts.map((post) => {
        return (
          <Link href={`posts/${post.id}`} passHref>
            <div key={post.id}>{post.title}</div>
          </Link>
        )
      })}
    </>
  )
}

export default PostsList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return {
    props: {
      posts: data,
    },
  }
}
