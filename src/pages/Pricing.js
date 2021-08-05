import React from 'react'
import Helmet from 'react-helmet'
// import Pricing from '../Pricing'
// import PropTypes from 'prop-types'

const Price = ({ data }) => (
  <div className='columns'>
    {data.map(price => (
      <div key={price.plan} className='column' style={{ border: '1px solid #eaecee' }}>
        <section className='section'>
          <h4 className='has-text-centered has-text-weight-semibold'>
            {price.plan}
          </h4>
          <h2 className='is-size-1 has-text-weight-bold has-text-primary has-text-centered'>
                        ${price.price}
          </h2>
          <p className='has-text-weight-semibold'>{price.description}</p>
          <ul>
            {price.items.map(item => (
              <li key={item} className='is-size-5'>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

const Pricing = ({
    title,
    meta_title,
    meta_description,
    pricing,
  }) => (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <h2 className='has-text-weight-semibold is-size-2'>
                    {pricing.heading}
                  </h2>
                  <p className='is-size-5'>{pricing.description}</p>
                  <Price data={pricing.plans} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )





  export default Pricing