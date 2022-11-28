import React from 'react'
import img1 from './image/Screenshot_2022-11-01_11-12-59.png'
export const NavBar = () => {
  return (
    <div>
            <nav className='navbar' >
            <div className='logobuttonDiv'>
            <button className='logobutton'><img src={img1} alt="" /></button>
            </div>
            <div className='links'>
              {/* Links */}
               <ul className='flex ul'>
                <li><a href="">Solution</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">Company</a></li>
                <li><a href="">Get Started</a></li>
                <li><a href="">'&#x1F50E;Search</a></li>
                </ul>     
            </div>
            </nav>
        
    </div>
  )
}
