import Footer from '../components/Footer'

function About() {
  return (
    <>
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
