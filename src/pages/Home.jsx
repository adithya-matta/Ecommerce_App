import React, {useState,useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import "../Styles/home.css";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../Services/Services';
import ProductsList from '../components/UI/ProductsList';
import products from  '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock';

const Home = () => {
  //using useState hook
  let[trendingProducts,setTrendingProducts] = useState([])
  let[bestSalesProducts,setBestSalesProducts] = useState([])
  let[mobileProducts,setMobileProducts] = useState([])
  let[wirelessProducts,setWirelessProducts] = useState([])
  let[popularProducts,setPopularProducts] = useState([])

  //using useEffect Hook
  useEffect(() =>{
    const filteredTrendingProducts = products.filter(item => item.category === "chair")
    setTrendingProducts(filteredTrendingProducts);

    const filteredBestSalesProducts = products.filter(item => item.category === "sofa")
    setBestSalesProducts(filteredBestSalesProducts)

    const filteredMobileProducts = products.filter(item => item.category === "mobile")
    setMobileProducts(filteredMobileProducts)

    const filteredWirelessProducts = products.filter(item => item.category === "wireless")  //this is short syntax so we dont need return statement
    setWirelessProducts(filteredWirelessProducts)

    const filteredPolpularProducts = products.filter((item) => {return item.category === "watch"}) // in this we use braces so we use return state other wise we will get error
    setPopularProducts(filteredPolpularProducts)

    console.log("inside use effect")
  },[])


  const year = new Date().getFullYear()
  console.log("This is above return")
  return (
    <Helmet title={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <p className="hero__subtitle">Trending Products In {year}</p>
                <h2>Make your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dignissimos distinctio cupiditate tempore quis est quisquam aliquid asperiores, consequatur placeat!</p>
                <motion.button whileTap={{scale:1.2}} className="buy__btn">
                  <Link to='/shop'>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg='6' mg='6'>
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services/>
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts}/>
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count__down-col'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offer</h4>
                <h3 className='text-white fs-5 mb-3'>Quality ArmChair</h3>
              </div>
              <Clock/>
              <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn"><Link to='/shop'>Visit Store</Link></motion.button>
            </Col>
            <Col lg='6' md='12' className='text__end counter__img'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts}/>
            <ProductsList data={wirelessProducts}/>

          </Row>
        </Container>
      </section>

      <section className="popular__category">
      <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>Popular in Catogory</h2>
            </Col>
            <ProductsList data={popularProducts}/>

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home