import React from 'react'

const IconSwitch = ({ icon, onClick }) => (
  <button onClick={onClick} className='material-icons '>
    {icon}
  </button>
)

export default IconSwitch
