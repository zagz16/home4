import React from 'react'

function ShopCard({ item }) {
  return (
    <div className='wrap1'>
      <img className='snikkers__img' src={item.img} alt='snikkers' />
      <span className='snikkers__name'>{item.name}</span>
      <span className='snikkers__color'>{item.color}</span>
      <span className='snikkers__price'>{`$${item.price}`}</span>
      <button className='snikkers__button'>add to cart</button>
    </div>
  )
}

export default ShopCard
