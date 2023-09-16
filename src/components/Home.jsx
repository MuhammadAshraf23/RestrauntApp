// Home.jsx
import React from 'react';
import Trending from './Trending';
import { Recipes } from './Recipes';
import { MoreCategory } from './MoreCategory';
import MayLike from './MayLike';
import CookingPatners from './CookingPatners';

const Home = () => {
  return (
    <>
      <Recipes />
      <Trending />
      <MoreCategory />
      <MayLike />
      <CookingPatners />
    </>
  );
}

export default Home;
