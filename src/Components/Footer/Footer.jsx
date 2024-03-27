import React from 'react'
import leaf from '../Images/Leaf2FooterImg.webp'
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <h1 className='footer-logo'>M & M</h1>
            <p className='footer-date'>22 . 6 . 2024</p>

            <div className="footerImg">
                <img src={leaf} alt="" />
            </div>
        </div>
    )
}

export default Footer