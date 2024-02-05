import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import '../Styles/shop.css'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'

const Shop = () => {
  const[productsData,setProductData] = useState(products)

  const handleFilter = (event) => {
    const filteredValues = event.target.value
    if(filteredValues==='sofa'){
      const filteredProducets = products.filter(item => (item.category==='sofa'))
      setProductData(filteredProducets)
    }

    if(filteredValues==='mobile'){
      const filteredProducets = products.filter(item => (item.category==='mobile'))
      setProductData(filteredProducets)
    }

    if(filteredValues==='chair'){
      const filteredProducets = products.filter(item => (item.category==='chair'))
      setProductData(filteredProducets)
    }
    if(filteredValues==='wireless'){
      const filteredProducets = products.filter(item => (item.category==='wireless'))
      setProductData(filteredProducets)
    }

    if(filteredValues==='watch'){
      const filteredProducets = products.filter(item => (item.category==='watch'))
      setProductData(filteredProducets)
    }

  }

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  const handleSearch = (event) =>{
    const searchValue=event.target.value;
    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchValue.toLowerCase())) 
    setProductData(searchedProducts)
  }

  return (
    // <h1>hi</h1>
    <Helmet title={'Shop'}>
      <CommonSection title='products'/>
      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Catagory</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="wireless">Headphones</option>
                  <option value="watch">Watches</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search__box">
                <input onChange={handleSearch} type="text" placeholder="Search products......."/>
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='p-0'>
        <Container>
          <Row>
            {
              productsData.length===0?<h1 className='font-semibold text-center mb-5'>No Proucts are Found!</h1>:<ProductsList data={productsData}/>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop