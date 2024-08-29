import React from 'react'
import {services} from '../constant'
import ServiceCard from '../components/Servicecard.jsx'

const second = () => {
    return (
        <section className=' flex  '>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </section>
      );
}

export default second
