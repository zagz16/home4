import React from 'react'
import ShopCard from './ShopCard'
import { nanoid } from 'nanoid'

function CardsView({ arr }) {
  return (
    <div className='wrap-cards'>
      {arr.map((item) => (
        <ShopCard item={item} key={nanoid()} />
      ))}
    </div>
  )
}

export default CardsView
