import React from 'react'
import { logo ,iconMoon , iconSun} from '../../images'
import "./Header.css"
const Header = () => {
  return (
    <section className='header_ui'>
        <div className='header_ui_logo'>
            <img src={logo} alt="logo"/>
        </div>
        <div>
            <button className='header_ui_button'>
                <img src={iconMoon} alt="" />
            </button>
        </div>
    </section>
  ) 
}

export default Header