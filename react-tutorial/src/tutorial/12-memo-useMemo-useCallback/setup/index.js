import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total,item) => {
      const price = item.fields.price;
      if(price >= total) {
        total = price
      }
      return total
    },0) / 100
  )
}

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart,setCart] = useState(0)

  // prevent rerender when cart value change
  // update addToCart everytime cart value changed
  // if not use: cart value is 0 and display screen is 1
  const addToCart = useCallback(() => {
      setCart(cart + 1)
    },[cart])

  // useMemo only when "products" change then run function caculate again
  const mostExpensive = useMemo(() => calculateMostExpensive(products), [
      products
    ])

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h2 style={{ marginTop: '3rem'}}>addToCart: {cart}</h2>
      <h1>Most Expensive: ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  )
}

// React.memo check if prop change or not
// if not then no need to rerending
const BigList = React.memo(({ products,addToCart }) => {
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>
      })}
    </section>
  )
})

const SingleProduct = ({ fields,addToCart }) => {
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </article>
  )
}
export default Index
