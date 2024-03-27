import React from 'react'

import { Link } from 'react-router-dom';

import './css/WeddingParty.css'

const WeddingParty = () => {
  return (
    <div className=' sideImg'>
      <div className="container">
      <div className="WeddingImg">
          <div className="text-content">
            <p>
"Two hearts, one promise. Today marks the start of our forever journey. Cheers to love, laughter, and a lifetime of shared dreams!"</p>
            <p>Join us as we celebrate our love and exchange our vows with our families and friends.</p>
          </div>
        </div>
        <div className="WeddingText">





          <h3 className='WeddingTitle'>Location</h3>
          <p>
The wedding will be hosted in Batroun, Lebanon, at the privately owned venue  <Link target='_blank' to="https://ixsir.com/"><b style={{ fontSize: "20px" }}>"Ixir"</b></Link>. The exact location can be found <Link className='WeddingLocation' to='https://maps.app.goo.gl/xEXRhMMYYrnDZsFb8 '>here</Link>.</p>

          <h3 className='WeddingTitle'>TIME OF THE CEREMONY</h3>
          <p>At 6:30 pm, the wedding ceremony will begin, and it will be followed by a welcome drink reception, dinner, and then the festivities will unfold.</p>

          <h3 className='WeddingTitle'>WHAT TO WEAR</h3>
          <p>???</p>

          <h3 className='WeddingTitle'>CUISINE</h3>
          <p>Meat enthusiasts, indulge your cravings at our live food stations. Rest assured, we've also catered to those with plant-based preferences.</p>


        </div>
        
      </div>
    </div>
  )
}

export default WeddingParty