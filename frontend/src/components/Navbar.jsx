import React from 'react'
import precioChileno from '../utils/utils.js'

const Navbar = () => {
  const total = 25000
  const token = false
  let buttonA = ''
  let buttonB = ''
  if (token==false) {
    buttonA = '🔐 Login'
    buttonB = '🔐 Register'
  } else {
    buttonA = '🔓 Profile'
    buttonB = '🔒 Logout'
  }
  return (
    <div className='Navbar'>
      <div className='buttonsNavContainer'>
        <div className='tittleContainer'>Pizzería Mamma Mia!</div>
        <div className='buttonNavbar'>🍕 Home</div>
        <div className='buttonNavbar'> {buttonA}</div>
        <div className='buttonNavbar'>{buttonB}</div>
      </div>
      <div>
        <div className='cartContainer'>🛒 Total: {precioChileno(total)}</div>
      </div>
    </div>
  )
}

export default Navbar