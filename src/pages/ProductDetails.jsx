import React, { useState, useRef, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'
import '../Styles/productDetails.css'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/CartSlice'
import { toast } from 'react-toastify'

const ProductDetails = () => {
  const[tab,setTab] = useState('desc')
  const[ratting,setRatting] = useState(null)
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch();


  const {id} = useParams()
  const product = products.find((item) => item.id===id)

  const {imgUrl, productName, price, avgRating, reviews, description, shortDesc, category} = product

  const relatedProducts = products.filter(item => item.category===category)
  const submitHandler = (e) => {
    e.preventDefault()
    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    const reviewObj = {
      userName:reviewUserName,
      message:reviewUserMsg,
      ratting,
    }
    toast.success('Thanks for your review')
  }

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price
  
    }))

    toast.success('Product added Successfully')
  }
  useEffect(() => {
    window.scrollTo(0,0)
  },[product])

  return (
    // <h1>details</h1>
    <Helmet title={productName}>
      <CommonSection title={productName}/>
      <section className=''>
        <Container className='pt-0'>
          <Row className=''>
            <Col lg='6' className=''>
              <img className='image__section' src={imgUrl} alt="" />
            </Col>
            <Col lg='6'>
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating flex items-center gap-5 mb-3">
                  <div>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-half-line"></i></span>
                  </div>
                  <p>(<span>{avgRating}</span> Ratting)</p>
                </div>
                <div className='flex items-center gap-5'>
                  <span className='product__price'>${price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>
                <p className='mt-3'>{shortDesc}</p>
                <motion.button whileTap={{scale:1.2}} className='buy__btn' onClick={addToCart}>Add to Cart</motion.button>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper flex items-center gap-5">
                <h6 className={`${tab==='desc'?'active__tab':''}`} onClick={() =>  setTab('desc')}>Description</h6>
                <h6 className={`${tab==='rev'?'active__tab':''}`} onClick={() => setTab('rev')}>Reviews ({reviews.length})</h6>
              </div>
              {
                tab==='desc'?(<div className="tab__content mt-5">{description}</div>):(<div className='product__review mt-5'>
                  <div className="review__wrapper">
                    <ul>
                      {
                        reviews?.map((item,index) =>(
                          <li key={index} className='mb-4'>
                            <h6>John Doe</h6>
                            <span>{item.rating} (Rating)</span>
                            <p>{item.text}</p>  
                          </li>
                        ))
                      }
                    </ul>
                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input type="text" name="" placeholder="Enter your Name" ref={reviewUser} required/>
                        </div>
                        <div className="form__group flex items-center gap-5 rating__group">
                          <motion.span whileTap={{scale:1.2}} onClick={() => setRatting(1)}>
                            1<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={() => setRatting(2)}>
                            2<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={() => setRatting(3)}>
                            3<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={() => setRatting(4)}>
                            4<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={() => setRatting(5)}>
                            5<i class="ri-star-s-fill"></i>
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea rows={4} type="text" name="" placeholder="Review message" ref={reviewMsg} required/>
                        </div>
                        <motion.button whileTap={{scale:1.2}} type='submit' className='buy__btn'>Submit</motion.button>
                      </form>
                    </div>
                  </div>
                </div>)
              }
            </Col>
            <Col lg='12' className='mt-5'>
              <h2 className="related__title">You might also like</h2>
            </Col>
            <ProductsList data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails