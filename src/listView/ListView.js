import React from 'react'
import ShopItem from './ShopItem'
import { nanoid } from 'nanoid'

function ListView({ arr }) {
  return (
    <>
      {arr.map((item) => (
        <ShopItem item={item} key={nanoid()} />
      ))}
    </>
  )
}

export default ListView
