import Footer from '../components/Footer'
import Head from 'next/head'
function About() {
  return (
    <>
      <Head>
        <title>this is the title in the Head tag</title>
        <meta name='description' content='free tutorials on web development' />
      </Head>
      <div className='content'>about page</div>
    </>
  )
}

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}

export default About
