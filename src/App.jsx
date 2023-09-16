import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Trending from './components/Trending';
import { Recipes } from './components/Recipes';
import { MoreCategory } from './components/MoreCategory';
import MayLike from './components/MayLike';
import  Home  from './components/Home';
function App() {
  return (
     <Router>
    <div className='main'>
      <div>
        <Navbar />
      </div>
      <div className='mainImage'>
        <h1 className='heading'>Bring People Together  With <br /> <b>Great Food</b> </h1>
        <p>Welcome to <b>Foody</b> <br /> Where Great Food Unites People. Join us in bringing hearts together through the joy of delightful cuisine</p>
      </div>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/more-category" element={<MoreCategory />} />
          <Route path="/may-also-like" element={<MayLike />} />
        </Routes>
      <div className='loadBtn'>
        <button className='load'>Load More</button>
      </div>
      <div>
        <footer>
          <p>© Copyright 2023 All rights of publications are reserved by <b> Food Fusion.</b> Reproduction without consent is not allowed.</p>
        </footer>
      </div>
    </div>
    </Router>
  );
}

export default App;
