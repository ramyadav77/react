import React from 'react'

const Product = () => {
  return (
    <div>
        <img src='/images/peproni.png' alt="pep"/>
        <div className='text-center'>
        <h2 className='text-lg font-bold py-2'>hawana special </h2>
        <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>small</span>
        </div>
         <div className='flex justify-between items-center mt-4' >
          <span>$500</span>
          <button className='bg-yellow-200 py-1 rounded-full text-sm px-4'>ADD</button>
         </div>
      </div>
  )
}

export default Product