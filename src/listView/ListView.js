import React from 'react';
import ShopItem from './ShopItem';

function ListView(props){
         const {arr}=props
     return(
        <>
{
    arr.map((item,index)=>(
              <ShopItem item={item} key={index} />
    ))
}
              </>
    )
}

export default ListView