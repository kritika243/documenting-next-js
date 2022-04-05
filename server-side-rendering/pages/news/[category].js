function filterArticles({ articles, category }) {
  return (
    <>
      <h2>News for category - {category}</h2>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            {article.title} | {article.category} | {article.description}
          </div>
        )
      })}
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context
  const { category } = params
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  )
  const data = await response.json()

  return {
    props: {
      articles: data,
      category,
    },
  }
}

export default filterArticles
