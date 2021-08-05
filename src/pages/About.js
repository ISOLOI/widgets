import Header from '../components/Header'
import Meta from '../components/Meta'

const About = () => {
  // page content
  const pageTitle = 'About'
  const pageDescription = 'What made me do this?'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default About