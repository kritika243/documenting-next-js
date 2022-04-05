function NewsArticlesList({ articles }) {
  return (
    <>
      <h3>List of news articles</h3>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h3>{article.title}</h3>
            <h4>{article.category}</h4>
            <h6>{article.description}</h6>
          </div>
        )
      })}
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news')
  const data = await response.json()

  return {
    props: {
      articles: data,
    },
  }
}

export default NewsArticlesList
