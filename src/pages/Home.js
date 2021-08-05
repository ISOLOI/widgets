import Header from '../components/Header'
import Meta from '../components/Meta'
import FeatureCard from '../components/FeatureCard/FeatureCard'
import choice from '../assets/images/choice.svg'

const Home = (props) => {
  // page content
  const pageTitle = 'Home'
  const pageDescription = 'welcome to react bootstrap template'
//cardfeature cardimage cardtitle cardtext
  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <section className="section-feature">
      <FeatureCard 
      cardtitle="Access"
      cardimage={choice}
      cardtext="you know how it works now. I get your potential candidates rounded up fasterthan you can blink"
      />
      </section>
    </div>
  )
}

export default Home