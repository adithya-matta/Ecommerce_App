import React from 'react'
import { Container,Col,Row,Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../Styles/Checkout.css'

const Checkout = () => {
  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout'/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 font-bold'>Billing Information</h6>
              <Form className='billing__form'> 
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Enter your name' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="email" placeholder='Enter your email' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="number" placeholder='Phone number' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="text" placeholder='Street Address' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="text" placeholder='Postal Code' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="text" placeholder='City' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout