import React from 'react'
import { Container } from 'reactstrap'
import '../../Styles/commonSection.css'

const CommonSection = ({title}) => {
  return (
    <section className="common__section flex items-center justify-center">
        <Container className='text-center'>
            <h1>{title}</h1>
        </Container>
    </section>
  )
}

export default CommonSection