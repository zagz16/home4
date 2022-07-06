import React, { useState } from 'react'
import ListView from '../listView/ListView'
import CardsView from '../cardsView/CardsView'
import IconSwitch from '../iconSwitch/IconSwitch'

import products from './products'
import './Store.css'

const Store = () => {
  const [icon, setIcon] = useState('view_module')

  const handleClick = () => setIcon((prev) => (prev === 'view_module' ? 'view_list' : 'view_module'))

  return (
    <>
      <IconSwitch icon={icon} onClick={handleClick} />
      {icon === 'view_module' ? <CardsView arr={products} /> : <ListView arr={products} />}
    </>
  )
}

export default Store
