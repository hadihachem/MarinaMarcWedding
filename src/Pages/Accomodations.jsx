import React from 'react'
import { Link } from 'react-router-dom';
import './css/Accomodations.css'


const Accomodations = () => {
  return (
    <div className=' sideImg'>
    <div className="container">
    {/* <div className="WeddingImg">
        <div className="text-content">
          <p>
"Two hearts, one promise. Today marks the start of our forever journey. Cheers to love, laughter, and a lifetime of shared dreams!"</p>
          <p>Join us as we celebrate our love and exchange our vows with our families and friends.</p>
        </div>
      </div> */}
      <div className="WeddingText">
        <h3 className='WeddingTitle'>AIRPORT PICKUP</h3>
        <p>Hello Friends and Family!</p>
        <p>If you'd like to have your airport pickup organized, please let us know in advance. No matter if you are directly going to Byblos (where the wedding takes places) or if you want to stay in Beirut a few days before hand - we got you covered!</p>
        

        <h3 className='WeddingTitle'>ALEPH BOUTIQUE HOTEL</h3>
        <h5 className='HotelInfo'>CARDAHI CENTER، BYBLOS، JBEIL, LEBANON</h5>
        <h5 className='HotelInfo'>+961 9 945 333</h5>
        <h6 className='HotelInfo'>Use Code: .........</h6>
        <p>Aleph Boutique Hotel is a charming boutique hotel overlooking the mediterranean coast and the famous Crusader's Castle.</p>
        <p><b>We have blocked all rooms </b>for family and friends so <b>please contact us to coordinate with the hotel.</b></p>

        <div className="ViewBtn">
        <Link className='viewHotel' to="/">View</Link>

        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Accomodations