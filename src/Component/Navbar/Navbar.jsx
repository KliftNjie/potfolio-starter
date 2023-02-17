import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='n-wrapper'>
         <div className='n-left'>
            <div className='n-name'>Muammed</div>
           <Toggle/>
         </div>
         <div className='n-right'>
            <div className='n-list'>
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Experience</li>
                    <li>Porfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className='button n-button'>Contact</button>
         </div>
    </div>
  )
}

export default Navbar