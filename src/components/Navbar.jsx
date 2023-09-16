import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
const Navbar = () => {
  return (
    <nav>
      <h1><Link to="/home">Foody</Link></h1>
      <ul> 
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/trending">Trending</Link></li>
        <li><Link to="/more-category">More Category</Link></li>
        <li><Link to="/may-also-like">May Also Like</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
