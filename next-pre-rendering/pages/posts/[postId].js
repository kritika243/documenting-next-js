function Post({ post }) {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  )
}

export default Post

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  const paths = data.map((post) => {
    return {
      params: { postId: `${post.id}` },
    }
  })
  return {
    // paths: [
    //   {
    //     params: { postId: '1' },
    //   },
    //   {
    //     params: { postId: '2' },
    //   },
    //   {
    //     params: { postId: '3' },
    //   },
    // ],
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
  const data = await resp.json()

  return {
    props: {
      post: data,
    },
  }
}
