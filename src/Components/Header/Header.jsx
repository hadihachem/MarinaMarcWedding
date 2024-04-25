import React from 'react'
import "./Header.css"
import headerImg from "../Images/HeaderImg.webp"


const Header = () => {
  return (
    <div className='Header'>
        <div className="header-context">
            <img src={headerImg} alt="" />
            <h1> MARC & MARINA </h1>
            <h6>JUNE 22, 2024 <span>.</span>BATROUN, LEBANON</h6>
        </div>
    </div>
  )
}
export default Header
