import React from 'react';
import ShopCard from './ShopCard';

function CardsView(props){
const [arr]=props

    return(
        <>
        <ShopCard value={arr}/>
        </>
    )
}

export default CardsView