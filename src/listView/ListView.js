import React from 'react';
import ShopItem from './ShopItem';

function ListView(props){
    
console.log(props);
    const [arr]=props.arr
    return(
        <>
        <ShopItem list={arr}/>
        </>
    )
}

export default ListView