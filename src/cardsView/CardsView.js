import React from 'react';
import ShopCard from './ShopCard';

function CardsView(props){
const {arr}=props

    return(
        <div className='wrap-cards'>
        {
         arr.map((item,index)=>(
              <ShopCard item={item} key={index} />
    ))
        }
        </div>
    )
}

export default CardsView