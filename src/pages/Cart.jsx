import React, { useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import '../Styles/cart.css'
import CommonSection from '../components/UI/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import {motion} from 'framer-motion'
import {cartActions} from '../redux/slices/CartSlice'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const Cart = () => {
  useEffect(() => window.scrollTo(0, 0), [])
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Helmet title={'Cart'}>
      <CommonSection title='Shopping Cart'/>
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length===0 ? <h2>No items are added to the cart</h2>:
                <table className='table bordered border-b-[2px]'>
                  <thead className='border-b-[2px]'>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </thead>
                  <tbody>
                    {
                      cartItems.map((item,index) => (
                        <Tr item={item} key={index}/>
                      ))
                    }
                  </tbody>
                </table>
              }
            </Col>
            <Col lg='3'>
              <div>
                <h6 className='flex items-center justify-between'>Subtotal<span className='text-2xl font-bold'>${totalAmount}</span></h6>
                
              </div>
              <p className='text-sm mt-3'>taxes and shipping will caliculate in checkout</p>
              <div>
                <motion.button whileTap={{scale:1.2}} className='buy__btn w-full'><Link to='/checkout'>Checkout</Link></motion.button>
                <motion.button whileTap={{scale:1.2}} className='buy__btn w-full mt-3'><Link to='/shop'>Continue Shopping</Link></motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({item}) => {

  const  dispatch = useDispatch()
  const removeCartItem = () => {
    dispatch(cartActions.removeItem(item.id))
  }
  return <tr>
          <td><img src={item.imgUrl} alt="" /></td>
          <td>{item.productName}</td>
          <td>${item.price}</td>
          <td>{item.quantity}pc</td>
          <td><motion.i whileTap={{scale:1.4}} onClick={removeCartItem} class="ri-delete-bin-line"></motion.i></td>
        </tr>
}

export default Cart