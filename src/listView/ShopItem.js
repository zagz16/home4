import React from 'react';

function ShopItem({props}){
console.log(props);
    const [list]=props.list.list
    console.log(list)
    console.log({list})

    return(
        <>
        {
    list.map((item,index)=>(
        <div className="wrap" key={index}>
        <img className='snikkers__img' src={item.img} alt="snikkers"/>
        <span className='snikkers__name'>{item.name}</span>
        <span className='snikkers__color'>{item.color}</span>
        <span className='snikkers__price' >{`$${item.price}`}</span>
        <button className='snikkers__button'>add to cart</button>
        </div>
    ))
}
        </>
    )
}

export default ShopItem