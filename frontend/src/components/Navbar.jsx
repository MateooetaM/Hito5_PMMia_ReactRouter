import React from 'react'
import './Navbar.css'

const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className='navbar'>

      <div className='nav-elements'>
        <h1 class="fs-5 text-light">¡Pizzería Mamma Mia!</h1>
        <div className='nav-button'>
          <button class="btn btn-outline-light">🍕 Home</button>
          {token != true ? (
            <>
            <button class="btn btn-outline-light">🔓 Profile</button>
            <button class="btn btn-outline-light">🔒 Logout</button>
            </>
            ):(
            <>
            <button class="btn btn-outline-light"> 🔐 Login</button>
            <button class="btn btn-outline-light"> 🔐 Register</button>
            </>)}
        </div>

        <div className='button-derecha'>
          <button class="btn btn-outline-info">🛒 Total: ${total.toLocaleString()}</button>
        </div>
      </div>
    
    </nav>
  )
}

export default Navbar