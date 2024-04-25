import React from 'react'
import homeImg from '../Components/Images/m&m.webp'
import { Link } from 'react-router-dom'
import './css/Home.css'
const Home = () => {
  return (
  <>
  <div className="homeImg">
        <img rel='preload' src={homeImg} alt="" />
      </div>
    <div className='container Home'>
      
      <div className="HomeInfo">
        <h2 className='HomeDate'>
          JUNE 22, 2024
        </h2>
        <h2 className='HomeLocation'>
          BATROUN LEBANON
        </h2>
      </div>
      {/* <Link to="/" className='rsvp-btn'> Save The Date</Link> */}
      <div className="WeddingInfo">
        <h2 className='WeddingDay'>
          WEDDING DAY
        </h2>
        <h3 className='WeddingDate'>
          <b className='superBold '>SATURDAY, JUNE 22, 2024</b>
        </h3><br />
        <h5 className="WeddingTime">CEREMONY WILL BE HELD AT 5:30 PM</h5>
        <h5 className="WeddingTime">AT MAR SABA <Link target='_blank' to="https://maps.app.goo.gl/z78fqFoxTwhZZNhe6 "><b style={{ fontStyle: 'italic', borderBottom: '2px solid black' }}
>CHURCH</b></Link>, BATROUN</h5>

        <br />
        <h5 className="WeddingTime">FOLLOWED BY A RECEPTION AT 7:00PM</h5>
        <h5 className="WeddingTime">AT <Link target='_blank' to="https://maps.app.goo.gl/irngVSVnErR3zByQ9 "><b style={{ fontStyle: 'italic', borderBottom: '2px solid black' }}
>Ixir</b></Link> WINERY, BATROUN</h5>

        <div className='borderBottom'></div>
        
        <h3 className='Title'>Embracing the Dawn</h3>

        <div className="HomeText">
          <p>"Life leads us down unforeseen paths, yet love unites us..." This profound truth will illuminate our celebration with cherished ones on our most unforgettable day.</p>
          <p>We extend a heartfelt invitation to explore our wedding website, where every detail leading up to our special day will be shared with you.</p>
          <p>We deeply appreciate your presence and enduring affection. Sharing this joyous occasion with you fills our hearts with immense happiness!</p>
          <p>With love,</p>
          <p>Marina & Marc</p>
          <p><b className='superBold'>RSVP by may 15<small>th</small></b></p>
        </div>
      </div>
      
    </div>
    </>

  )
}

export default Home