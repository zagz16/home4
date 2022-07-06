import React from 'react';

function IconSwitch (props) {

    console.log(props);
    const {icon,onClick}=props
   
    return ( 
        <>
        <button onClick={onClick} className="material-icons">
{icon}
</button>



        </>
     );
}
export default IconSwitch;
