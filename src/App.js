import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Accomodations from './Pages/Accomodations';
import Home from './Pages/Home';
import StayPics from './Pages/Stay&Pics';
import WeddingParty from './Pages/WeddingParty';
import './index.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router basename="WeddingMarinaMarc">
        <Header />
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/wedding-party" element={<WeddingParty/>} />
          <Route path="/accommodations" element={<Accomodations/>} />
          <Route path="/stay-pics" element={<StayPics/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
