import React, { useEffect, useState } from 'react'
import Product from '../components/Product'

const Products = () => {
    const[products,setProducts]=useState([]);
     useEffect(()=>{
      fetch(`/api/products`)
      .then(response=>{
        console.log(response);
         return response.json()
      })
      .then(products=>{
        console.log(products);
      })
     },[])
     
  return (
    <div className=' container mx auto  ml-4 pb-24'>
     <h1 className='text-lg font-bold my-8 '>Products</h1>
     <div className='grid grid-cols-5 gap-24'>
      <Product/>
      
     </div>

    </div>
  )
}

export default Products