import './App.css';
import React from 'react'
import ResponsiveAppBar from './components/Navbar'
import RecipeReviewCard from './components/card';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';



const cardData = [
  {
    title: 'Tikka Kabab',
    image:
      'https://www.foodfusion.com/wp-content/uploads/2023/07/GRAB-01-YT-4-300x225.jpg?v=1692087741',
    description:
      'This impressive paella is a perfect party dish impressive paella is a perfect party dish...',
  },
  {
    title: 'Sekh Kabab',

    image:
      'https://www.foodfusion.com/wp-content/uploads/2023/07/GRAB-01-YT-3-300x225.jpg?v=1691492072',
    description:
      'This impressive paella is a perfect party dish impressive paella is a perfect party dish...',
  },
  {
    title: 'Aloo Bhunna',

    image:
      'https://www.foodfusion.com/wp-content/uploads/2023/08/YT_02-300x225.jpg?v=1692960496',
    description:
      'This impressive paella is a perfect party dish impressive paella is a  impressive paella is a perfect..',
  },
  {
    title: 'juice',
    image:
      'https://www.foodfusion.com/wp-content/uploads/2023/08/YT_01-1-300x225.jpg?v=1692858581',
    description:
      'This impressive paella is a perfect party dish. impressive paella is a perfect party dish..',
  },
];
function App() {
  return (
    <div className='main'>
      <div>
        <ResponsiveAppBar />
      </div>
      <div className='mainImage'>
        <h1 className='heading'>Bring People Together  With <br /> <b>Great Food</b> </h1>
        <p>Welcome to <b>Foody</b> <br /> Where Great Food Unites People. Join us in bringing hearts together through the joy of delightful cuisine</p>
      </div>
      <h2 className='recipes'>Our <b>Recipes</b></h2>
      <div className='card-group'>
        {cardData.map((card, index) => (
          <div className='card' key={index}>
            <RecipeReviewCard
              title={card.title}
              subheader={card.subheader}
              image={card.image}
              description={card.description}
            />
          </div>
        ))}
      </div>
      <div className='loadBtn'>
        <button className='load'>Load More</button>
      </div>
      <div className='trending'>
        <h2>Trending on <b>Foody</b></h2>
        <div className='trending-card-group'>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2017/04/P1090008-300x225.jpg?v=1587767800"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Chicken Manchurian
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px'}}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2017/05/ID-R00222-1-300x225.jpg?v=1587767132"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Shab Daig
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2021/01/Halwa-kaddu-with-Gosht-Recipe-by-Food-fusion-5-300x225.jpg?v=1609933518"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Halwa Kaddu Gosht
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2021/08/YT-grab-2-9-300x225.jpg?v=1630297812"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Malai Tikka Pulao
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='trending-card-group'>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2022/11/YT-Grab-05-1-300x225.jpg?v=1669968769"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Fish Tikka Biryani
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345  ,marginBottom: '10px'}}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2020/07/Broccoli-paratha-Recipe-by-Food-fusion-2-300x225.jpg?v=1594382571"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Broccoli Paratha
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2023/04/yt8-300x225.jpg?v=1681373315"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Turkish Doner
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2020/11/Spicy-potato-pepper-curry-Recipe-by-Food-fusion-2-300x225.jpg?v=1606450840"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Spicy Potato Pepper Curry
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="more-categ">
        <h2>More <b>Category</b></h2>
        <div className='category-card-group'>
          <Card sx={{ maxWidth: 350 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2018/05/ramzan-150x150.png"
              alt="Paella dish"
            />
            <CardContent>
            <Typography variant="body2" fontWeight="bold">
                <Typography variant="body2" fontWeight="bold">
                  Ramazan
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  <span style={{ color: 'orange' }}>300 Recipes</span>
                </Typography>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 350  ,marginBottom: '10px'}}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2018/05/snacks-150x150.png"
              alt="Paella dish"
            />
            <CardContent>
            <Typography variant="body2" fontWeight="bold">
                <Typography variant="body2" fontWeight="bold">
                Appertizers
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  <span style={{ color: 'orange' }}>200 Recipes</span>
                </Typography>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 350  ,marginBottom: '10px'}}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2018/05/breakfast-150x150.png"
              alt="Paella dish"
            />
            <CardContent>
            <Typography variant="body2" fontWeight="bold">
                <Typography variant="body2" fontWeight="bold">
               BreakFast
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  <span style={{ color: 'orange' }}>120 Recipes</span>
                </Typography>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 350 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2018/05/desserts-150x150.png"
              alt="Paella dish"
            />
            <CardContent>
            <Typography variant="body2" fontWeight="bold">
                <Typography variant="body2" fontWeight="bold">
                  Deserts
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  <span style={{ color: 'orange' }}>380 Recipes</span>
                </Typography>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 350  ,marginBottom: '10px'}}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2018/05/biryani-150x150.png"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" fontWeight="bold">
                <Typography variant="body2" fontWeight="bold">
                  Biryani
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  <span style={{ color: 'orange' }}>320 Recipes</span>
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='trending'>
        <h2>You May <b>Also Like</b></h2>
        <div className='trending-card-group'>
          <Card sx={{ maxWidth: 345  ,marginBottom: '10px'}}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2021/09/YT-Grab-3-5-300x225.jpg?v=1632198051"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
              Taco Beef Burger With Guacamo
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345  ,marginBottom: '10px'}}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2018/01/ID-R00532-Masala-Oats-Recipe-By-Food-fusion-2-300x225.jpg?v=1587765436"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
              Masala Oats
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345  ,marginBottom: '10px'}}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2019/10/Wanpaku-Sandwich-Recipe-By-food-fusion-2-300x225.jpg?v=1587763056"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
              Wanpaku Sandwich
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2019/10/Tomato-Chutney-2-ways-Recipe-by-Food-fusion-1-300x225.jpg?v=1587763026"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
              Tomato Chutney 2 Ways
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='trending-card-group'>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2021/04/Soky-Yogurt-Chicken-Recipe-by-Food-fusion-1-300x225.jpg?v=1617772606"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
              Smoky Yogurt Chicken
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2018/09/Fish-Kofta-Recipe-by-Food-fusion-5-300x225.jpg?v=1587764594"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
              Fish Kofta
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345  ,marginBottom: '10px'}}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2017/05/ID-R00133-A-300x225.jpg?v=1587766625"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
              Hot & Sour Soup (Chicken)
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345  ,marginBottom: '10px'}}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2019/05/Sindhi-Kharkon-Recipe-by-Food-fusion-2-300x225.jpg?v=1587763478"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontWeight="bold">
              Sindhi Kheer Kharkon
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='partners'>
        <h2>Our Happy <b>Cooking Patners</b></h2>
        <div className='trending-card-group'>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2017/07/Surf-Excel-Logo-1.png"
              alt="Paella dish"
            />
          </Card>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2017/07/Dawn-Foods-1.png"
              alt="Paella dish"
            />
          </Card>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2017/07/Meat-One-Meat-Experts-Logo-1.png"
              alt="Paella dish"
            />
          </Card>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2017/07/New-Knorr-Logo-Hi-Res-2-1.png"
              alt="Paella dish"
            />
          </Card>
        </div>
        <div className='trending-card-group'>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2017/07/sufi-cooking-oil-1.png"
              alt="Paella dish"
            />
          </Card>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2017/07/Kenwood-Logo-1.png"
              alt="Paella dish"
            />
          </Card>
          <Card sx={{ maxWidth: 345  ,marginBottom: '10px'}}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2017/07/Youngs-Honey-Logo-1.png"
              alt="Paella dish"
            />
          </Card>
          <Card sx={{ maxWidth: 345 ,marginBottom: '10px' }}>
            <CardMedia
              component="img"
              height="194"
              image="https://www.foodfusion.com/wp-content/uploads/2017/07/Vim-Logo.png"
              alt="Paella dish"
            />
          </Card>
        </div>
        </div>
       <div>
        <footer>
          <p>© Copyright 2023 All rights of publications are reserved by <b> Food Fusion.</b> Reproduction without consent is not allowed.</p>

        </footer>
        </div> 
    </div>
  );
}

export default App;
