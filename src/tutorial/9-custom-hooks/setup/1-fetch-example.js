import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  // Will use CUSTOM HOOK for this:

  // const [loading, setLoading] = useState(true)
  // const [products, setProducts] = useState([])

  // const getProducts = async () => {
  //   const response = await fetch(url)
  //   const products = await response.json()
  //   setProducts(products)
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   getProducts()
  // }, [url])

  const { loading, products } = useFetch(url);

  console.log(products)

  return (
    <div className='container'>
      <h2>{loading ? 'loading...' : 'data'}</h2>
      <h3>Remember that custom hooks must have name like "use" and then the hook name</h3>
    </div>
  )
}

export default Example
