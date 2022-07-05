import React from 'react';

function IconSwitch (props) {

    console.log(props);
    const {icon}=props
   
    return ( 
        <>
        <button className="material-icons">
{icon}
</button>



        </>
     );
}
export default IconSwitch;
