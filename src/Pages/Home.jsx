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
          JUIN 22, 2024
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
          JUIN 22, 2024
        </h3>
        <h3 className="WeddingTime">6:30 PM</h3>
        <h3 className='Title'>Dancing till Sunrise</h3>

        <div className="HomeText">
          <p>"Life takes you to unexpected places but love brings you together..." it's how we will celebrate with our loved ones our most special day.</p>
          <p>We would like to welcome you to our wedding website where we will be sharing all details with you prior to our wedding.</p>
          <p>Thank you for being there for us and your ongoing love. We are very happy to share this weekend with you!</p>
          <p>Marina & Marc</p>
          <p>Please take a look and don't forget to RSVP!</p>
        </div>
      </div>
      
    </div>
    </>

  )
}

export default Home